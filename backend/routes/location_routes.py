from fastapi import APIRouter
from controllers.location_controller import save_location, get_locations
from models.location_model import Location

router = APIRouter()

@router.post("/save-location/")
async def save_location_route(location: Location):
    return await save_location(location)

@router.get("/get-locations/")
async def get_locations_route():
    return await get_locations()
