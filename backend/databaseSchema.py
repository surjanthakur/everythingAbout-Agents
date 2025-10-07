from sqlmodel import Field, SQLModel


class Tutorials(SQLModel, table=True):
    id: str | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=100, min_length=5)
    about: str = Field(min_length=10)
    url: str


class Resources(SQLModel, table=True):
    id: str | None = Field(default=None, primary_key=True)
    title: str = Field(max_length=100, min_length=5)
    about: str = Field(min_length=10)
    url: str
