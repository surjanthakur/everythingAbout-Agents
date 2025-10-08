from fastapi import FastAPI, Depends, HTTPException, status, Request, Cookie
from fastapi.responses import JSONResponse, RedirectResponse
from authlib.integrations.starlette_client import OAuth  # type: ignore
from starlette.middleware.sessions import SessionMiddleware
from datetime import datetime, timedelta
from jose import jwt, ExpiredSignatureError, JWTError  # type: ignore
from dotenv import load_dotenv
import os
import uuid
import traceback
from dotenv import load_dotenv

load_dotenv(override=True)

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GOOGLE_CLIENT = os.getenv("GOOGLE_CLIENT")
GOOGLE_SECRET = os.getenv("GOOGLE_SECRET")
SECRET_KEY = os.getenv("SECRET_KEY")
REDIRECT_URL = os.getenv("REDIRECT_URL")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")
FRONTEND_URL = os.getenv("FRONTEND_URL")

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)  # type: ignore

# OAuth Setup
oauth = OAuth()
oauth.register(
    name="auth_demo",
    client_id=GOOGLE_CLIENT,
    client_secret=GOOGLE_SECRET,
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    authorize_params=None,
    access_token_url="https://accounts.google.com/o/oauth2/token",
    access_token_params=None,
    refresh_token_url=None,
    authorize_state=SECRET_KEY,
    redirect_uri="http://127.0.0.1:8000/auth",
    jwks_uri="https://www.googleapis.com/oauth2/v3/certs",
    client_kwargs={"scope": "openid profile email"},
)

# JWT Configurations
SECRET_KEY = JWT_SECRET_KEY
ALGORITHM = "HS256"
