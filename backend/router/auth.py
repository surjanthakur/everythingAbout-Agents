from fastapi import APIRouter, Depends, HTTPException, status
from databaseSchema import User
from database import get_session
from sqlmodel import Session, select
from passlib.context import CryptContext  # type: ignore
import uuid
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm
from .authSessionFunc import create_access_token
from dotenv import load_dotenv
from pydanticModel import ShowUser
from fastapi.responses import JSONResponse
from .authSessionFunc import get_current_user

load_dotenv(override=True)

router = APIRouter(tags=["auth routes"])

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify(plain_pass, hash_pass):
    return pwd_context.verify(plain_pass, hash_pass)


@router.post("/signup", status_code=status.HTTP_201_CREATED, response_model=ShowUser)
def signup_user(user: User, session_db: Session = Depends(get_session)):
    existing_user = session_db.query(User).filter(User.email == user.email).first()  # type: ignore
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with that email or username already exists.",
        )
    try:
        hash_pass = pwd_context.hash(user.password)
        user_id = str(uuid.uuid4())
        new_user = User(
            id=user_id, username=user.username, email=user.email, password=hash_pass
        )
        session_db.add(new_user)
        session_db.commit()
        session_db.refresh(new_user)
        return new_user
    except Exception as err:
        return HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"something went wrong! {err}",
        )


@router.post("/login")
def login(
    req: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_session)
):
    statement = select(User).where(User.username == req.username)
    user = db.exec(statement).first()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found."
        )

    if not pwd_context.verify(req.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect password."
        )

    access_token_expires = timedelta(minutes=60)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    response = JSONResponse({"message": "Login successfully"})
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        max_age=3600,
        secure=True,
    )
    return response
