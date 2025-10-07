from fastapi import APIRouter, HTTPException, status, Depends
from sqlmodel import Session
from databaseSchema import Resources
from pydanticModel import ShowFields
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
def create_resources(form_data: ShowFields, session_db: Session = Depends(get_session)):
    try:
        resource_id = str(uuid.uuid4())
        new_resource = Resources(
            id=resource_id,
            title=form_data.title,
            about=form_data.about,
            url=form_data.url,
        )
        session_db.add(new_resource)
        session_db.commit()
        session_db.refresh(new_resource)
        return new_resource
    except Exception as err:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"cant create post {err}",
        )
