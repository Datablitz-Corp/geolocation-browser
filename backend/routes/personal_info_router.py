from fastapi import APIRouter
from models.personal_info_model import PersonalInfo, PersonalInfoResponse
from controllers.personal_info_controller import create_personal_info, get_personal_info

router = APIRouter(prefix="/personal-info", tags=["Personal Info"])

@router.post("/", response_model=PersonalInfoResponse)
async def add_personal_info(personal_info: PersonalInfo):
    new_id = await create_personal_info(personal_info)
    return {"id": new_id, **personal_info.dict()}

@router.get("/{personal_info_id}", response_model=PersonalInfoResponse)
async def read_personal_info(personal_info_id: str):
    return await get_personal_info(personal_info_id)