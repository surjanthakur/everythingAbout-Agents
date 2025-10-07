from fastapi import APIRouter, HTTPException, status, Depends
from sqlmodel import Session
from databaseSchema import Tutorials
from pydanticModel import ShowFields
from database import get_session
import uuid


router = APIRouter(tags=["tutorial video routes"])


@router.get("/allTutorials")
def get_allTutorials(session_db: Session = Depends(get_session)):
    try:
        all_tutorials = session_db.query(Tutorials).all()
        return all_tutorials
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"tutorials not found {err}"
        )


@router.post("/tutorials/create")
def create_resources(form_data: ShowFields, session_db: Session = Depends(get_session)):
    try:
        tutorial_id = str(uuid.uuid4())
        new_tutorial = Tutorials(
            id=tutorial_id,
            title=form_data.title,
            about=form_data.about,
            url=form_data.url,
        )
        session_db.add(new_tutorial)
        session_db.commit()
        session_db.refresh(new_tutorial)
        return new_tutorial
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"cant create resource: {err}",
        )
