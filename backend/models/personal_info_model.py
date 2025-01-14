
from sqlalchemy import Column, Integer, String
from database.connection import Base

class Registro(Base):
    __tablename__ = 'registro'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    phone = Column(String)

# Pydantic schema
from pydantic import BaseModel

class RegistroCreate(BaseModel):
    name: str
    email: str
    phone: str
