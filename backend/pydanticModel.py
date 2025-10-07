from pydantic import BaseModel


class ShowFields(BaseModel):
    title: str
    about: str
    url: str
