from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load model and encoders
model = joblib.load("crop_model.pkl")
encoders = joblib.load("encoders.pkl")

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    print("Received Data:", data)

    # Convert inputs
    input_data = pd.DataFrame([{
        "soil": encoders["soil"].transform([data["soil"]])[0],
        "weather": encoders["weather"].transform([data["weather"]])[0],
        "water": encoders["water"].transform([data["water"]])[0],
        "budget": encoders["budget"].transform([data["budget"]])[0]
    }])

    # Predict
    prediction = model.predict(input_data)

    # Decode prediction
    crop = encoders["crop"].inverse_transform(prediction)

    return jsonify({
        "recommended_crop": crop[0]
    })

if __name__ == "__main__":
    app.run(port=5001, debug=True)