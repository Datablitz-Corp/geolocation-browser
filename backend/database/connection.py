from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017")

# Conexión a MongoDB ## localizacion
#db = client["locationDB"]
#collection = db["locations"]  # Esta es la colección que necesitas importar


## calculadora
db = client["personalFormDB"]
personal_info_collection = db["personal_info"]
collection = db["form_responses"]