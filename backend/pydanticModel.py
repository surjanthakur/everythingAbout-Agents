from pydantic import BaseModel


class ShowFields(BaseModel):
    title: str
    about: str
    url: str


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None
