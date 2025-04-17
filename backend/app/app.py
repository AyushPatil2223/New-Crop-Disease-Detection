from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import os

from app.main import router as predict_router

app = FastAPI()

# Include the router
app.include_router(predict_router)

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Gemini config
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-1.5-flash")

@app.get("/")
def root():
    return {"message": "FastAPI + Gemini is active"}

@app.post("/generate")
async def generate_response(request: Request):
    data = await request.json()
    prompt = data.get("message", "Say something!")
    try:
        response = model.generate_content(prompt)
        return {"reply": response.text}
    except Exception as e:
        return {"error": str(e)}
