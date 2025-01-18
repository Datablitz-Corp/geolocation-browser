from fastapi import APIRouter, HTTPException
from models.response_model import FormResponse
from controllers.questions_controller import save_form_response

router = APIRouter()

@router.post("/questions")
async def create_form_response(response: FormResponse):
    try:
        response_id = await save_form_response(response)
        return {"id": response_id, "message": "Form response saved successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
