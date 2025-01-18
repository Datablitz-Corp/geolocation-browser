from pydantic import BaseModel, EmailStr

class PersonalInfo(BaseModel):
    name: str
    email: EmailStr
    phone: str

class PersonalInfoResponse(PersonalInfo):
    id: str