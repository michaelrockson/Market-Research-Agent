from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import auth, dashboard

app = FastAPI(
    title = "Agent_API",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(auth.router)
app.include_router(dashboard.router)
