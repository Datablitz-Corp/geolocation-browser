# routes/personal_info_routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from controllers.personal_info_controller import create_registro
from models.personal_info_model import RegistroCreate
from database.connection import get_db

router = APIRouter()

@router.post("/registro/")
def create_registro_endpoint(registro: RegistroCreate, db: Session = Depends(get_db)):
    return create_registro(db, registro)
