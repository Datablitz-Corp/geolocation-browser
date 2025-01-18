from fastapi import APIRouter

router = APIRouter()

@router.post("/personal-info")
async def save_personal_info(data: dict):
    # Lógica para manejar los datos
    return {"message": "Información guardada correctamente"}
