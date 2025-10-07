from fastapi import APIRouter, HTTPException, status, Depends
from sqlmodel import Session
from databaseSchema import Resources
from database import get_session
import uuid


router = APIRouter(tags=["read resources routes"])


@router.get("/allResources")
def get_allResources(session_db: Session = Depends(get_session)):
    try:
        all_resources = session_db.query(Resources).all()
        return all_resources
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"resources not found {err} !"
        )


@router.post("/resources/create")
def create_resources(form_data: Resources, session_db: Session = Depends(get_session)):
    pass
