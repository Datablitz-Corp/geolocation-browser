# controlador/personal_info_controller.py
from sqlalchemy.orm import Session
from model.personal_info_model import Registro, RegistroCreate

def create_registro(db: Session, registro: RegistroCreate):
    db_registro = Registro(name=registro.name, email=registro.email, phone=registro.phone)
    db.add(db_registro)
    db.commit()
    db.refresh(db_registro)
    return db_registro
