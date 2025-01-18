from database.connection import personal_info_collection
from models.personal_info_model import PersonalInfo
from bson import ObjectId
from fastapi import HTTPException

async def create_personal_info(data: PersonalInfo):
    result = personal_info_collection.insert_one(data.dict())
    return str(result.inserted_id)
async def get_personal_info(personal_info_id: str):
    result = personal_info_collection.find_one({"_id": ObjectId(personal_info_id)})
    if result:
        result["id"] = str(result["_id"])
        del result["_id"]
        return result
    raise HTTPException(status_code=404, detail="Personal info not found")