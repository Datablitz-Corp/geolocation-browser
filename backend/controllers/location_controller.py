from database.connection import collection
from models.location_model import Location

async def save_location(location: Location):
    location_dict = location.dict()
    collection.insert_one(location_dict)
    return {"message": "Location saved successfully"}

async def get_locations():
    locations = list(collection.find({}, {"_id": 0}))  # Excluye el campo _id
    return locations
