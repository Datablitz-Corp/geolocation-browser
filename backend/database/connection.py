from pymongo import MongoClient

# Conexión a MongoDB
client = MongoClient("mongodb://localhost:27017")
db = client["locationDB"]
collection = db["locations"]  # Esta es la colección que necesitas importar
collection = db["personal_info"]
