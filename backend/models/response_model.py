from pydantic import BaseModel, EmailStr
from typing import Optional

class FormResponse(BaseModel):
    email: EmailStr
    sol: Optional[str] = None
    capitalEspana: Optional[str] = None
    lenguaje: Optional[str] = None
    rojo: Optional[bool] = False
    verde: Optional[bool] = False
    azul: Optional[bool] = False
    horas: Optional[int] = None
    comentario: Optional[str] = None
