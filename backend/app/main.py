from fastapi import APIRouter, UploadFile, File, Request
from fastapi.responses import JSONResponse
import tensorflow as tf
from tensorflow.keras.preprocessing import image as keras_image
import numpy as np
from io import BytesIO
from PIL import Image

router = APIRouter()

# Load model
model_path = "app/model/trained_model.keras"
model = tf.keras.models.load_model(model_path)

# Class labels (ensure 38 classes are present)
class_names = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot', 'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy',
    'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight',
    'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy',
    'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
    'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
]

@router.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(BytesIO(contents)).resize((128, 128))
    image_array = keras_image.img_to_array(image)
    image_array = np.expand_dims(image_array, axis=0)

    predictions = model.predict(image_array)
    predicted_class = np.argmax(predictions)
    confidence = float(np.max(predictions))
    predicted_label = class_names[predicted_class]

    return JSONResponse(content={
        "prediction": predicted_label,
        "confidence": round(confidence, 3)
    })

@router.post("/chatbot")
async def chatbot(request: Request):
    try:
        data = await request.json()
        question = data.get("question", "").strip().lower()

        if not question:
            return JSONResponse(status_code=400, content={"error": "Question is required"})

        if "hello" in question or "hi" in question:
            answer = "Hello! How can I help you with plant disease queries today?"
        elif "treat" in question or "cure" in question:
            answer = "Please upload an image to identify the disease first. I’ll guide you with treatment steps."
        elif "thank" in question:
            answer = "You're welcome! Stay healthy and keep your plants healthy too."
        else:
            answer = "I'm here to help with plant diseases. Try asking about symptoms or treatments."

        return JSONResponse({"answer": answer})

    except Exception as e:
        return JSONResponse(status_code=500, content={"error": f"Chatbot failed: {str(e)}"})
