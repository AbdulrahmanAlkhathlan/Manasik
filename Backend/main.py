from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import openai
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://manasik.onrender.com","https://www.manasikplanner.com",],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai_api_key = os.getenv("VITE_OPENAI_API_KEY")

client = openai.OpenAI(api_key=openai_api_key)

class PlanRequest(BaseModel):
    user_input: str

@app.get("/")
def read_root():
    return {"message": "Manasik API is running."}

@app.post("/generate_plan")
def generate_plan(req: PlanRequest):
    prompt = f"""
User input:
{req.user_input}
"""

    try:
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful Umrah planner."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.6,
            top_p=0.7,
            max_tokens=700
        )
        result = response.choices[0].message.content
        return {"response": result}

    except Exception as e:
        return {"error": f"OpenAI API error: {str(e)}"}
