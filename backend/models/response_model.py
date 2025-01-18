from pydantic import BaseModel
from typing import Optional
from datetime import date

class FormResponse(BaseModel):
    sol: Optional[str]
    capitalEspana: Optional[str]
    lenguaje: Optional[str]
    rojo: Optional[bool] = False
    verde: Optional[bool] = False
    azul: Optional[bool] = False
    horas: Optional[int]
    comentario: Optional[str]
