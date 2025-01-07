# Prueba 1

## Tecnologías utilizadas

- Frontend: React/Boostrap
- Backend: FastAPI
- Base de datos: MongoDB
- Otras herramientas:[]

## Requisitos previos

Tener instalado en tu maquina:

- MongoDB: [Instrucciones para instalar MongoDB](https://www.youtube.com/watch?v=eKXIxSZrJfw)
- Node.js: (frontend)
- Python 3.x: (backend)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1. Clona el repositorio en tu maquina:
git clone <URL>
cd <nombre_del_archivo>

2. Configuracion de cada parte
2.1 Frontend 
cd frontend
npm install

2.2 Backend
cd backend
pip install -r requirements.txt

3. Levantar 
3.1 Frontend 
cd backend

3.2 Backend
uvicorn main:app --reload
cd frontend
npm run dev