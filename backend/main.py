from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import create_db
from router import resources, tutorials


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        create_db()
        yield
    except Exception as err:
        print(f"❌ can't connect to database: {err}")


app = FastAPI(lifespan=lifespan)

app.include_router(resources.router)
app.include_router(tutorials.router)
