from sqlmodel import Session, SQLModel, create_engine
from dotenv import load_dotenv
import os

load_dotenv()

database_url = os.getenv("DB_URL")

if not database_url:
    raise ValueError("⚠️ DB_URL not found in environment variables")

engine = create_engine(database_url, echo=False)


def create_db():
    SQLModel.metadata.create_all(engine)
    print("database is connected ✅")


def get_session():
    with Session(engine) as session:
        yield session
