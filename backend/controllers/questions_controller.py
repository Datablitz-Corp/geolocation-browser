from database.connection import collection
from models.response_model import FormResponse

async def save_form_response(response: FormResponse):
    result = collection.insert_one(response.dict())
    return str(result.inserted_id)
