from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import create_db
from router import resources, tutorials
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    try:
        create_db()
        yield
    except Exception as err:
        print(f"❌ can't connect to database: {err}")


app = FastAPI(lifespan=lifespan)

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(resources.router)
app.include_router(tutorials.router)
