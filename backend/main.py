from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.location_routes import router as location_router
from routes.personal_info_router import router as personal_info_router

app = FastAPI()

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Ajusta al puerto de tu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(location_router)
app.include_router(personal_info_router)