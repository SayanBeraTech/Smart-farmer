import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import joblib

print("Starting model training...")

# Load dataset
df = pd.read_csv("Crop_recommendationV2.csv")

print(df.head())

# Create categories
df["soil"] = pd.cut(
    df["ph"],
    bins=[0, 5.5, 7.5, 14],
    labels=["Sandy", "Loamy", "Clay"]
)

df["weather"] = pd.cut(
    df["rainfall"],
    bins=[0, 100, 200, 500],
    labels=["Sunny", "Cloudy", "Rainy"]
)

df["water"] = pd.cut(
    df["humidity"],
    bins=[0, 40, 70, 100],
    labels=["Low", "Medium", "High"]
)

df["budget"] = pd.cut(
    df["N"],
    bins=[0, 40, 80, 150],
    labels=["Low", "Medium", "High"]
)

# Keep required columns
df = df[["soil", "weather", "water", "budget", "label"]]

# Rename target column
df.rename(columns={"label": "crop"}, inplace=True)

print(df.head())

# Encode text columns
encoders = {}

for column in df.columns:
    le = LabelEncoder()
    df[column] = le.fit_transform(df[column].astype(str))
    encoders[column] = le

# Features and target
X = df.drop("crop", axis=1)
y = df["crop"]

# Train model
model = RandomForestClassifier(n_estimators=100)

model.fit(X, y)

# Save model
joblib.dump(model, "crop_model.pkl")
joblib.dump(encoders, "encoders.pkl")

print("✅ Model trained successfully!")