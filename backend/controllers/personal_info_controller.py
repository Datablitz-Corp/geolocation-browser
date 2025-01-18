from database.connection import personal_info_collection
from models.personal_info_model import PersonalInfo

async def add_personal_info(personal_info: PersonalInfo):
    result = await personal_info_collection.insert_one(personal_info.dict())
    return {"id": str(result.inserted_id)}
