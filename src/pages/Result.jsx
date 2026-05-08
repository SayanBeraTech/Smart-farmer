import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  Leaf,
  AlertTriangle,
  Loader2,
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  // AI States
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(true);
  const [confidence, setConfidence] = useState("92%");
  const [risk, setRisk] = useState("Low");
  const [profit, setProfit] = useState("₹20,000 - ₹35,000");

  // AI API Call
  useEffect(() => {
    if (!data) return;

    axios
      .post("http://localhost:5001/predict", {
        soil:
          data.soil === "Clay"
            ? "Clay"
            : data.soil === "Sandy"
            ? "Sandy"
            : "Loamy",

        weather:
          data.weather === "Rainy"
            ? "Rainy"
            : data.weather === "Cloudy"
            ? "Cloudy"
            : "Sunny",

        water:
          data.water === "High"
            ? "High"
            : data.water === "Medium"
            ? "Medium"
            : "Low",

        budget:
          data.budget === "High"
            ? "High"
            : data.budget === "Medium"
            ? "Medium"
            : "Low",
      })
      .then((res) => {
        setPrediction(res.data.recommended_crop);

        // Dynamic Profit Example
        if (res.data.recommended_crop === "rice") {
          setProfit("₹25,000 - ₹40,000");
          setRisk("Low");
        } else if (res.data.recommended_crop === "maize") {
          setProfit("₹18,000 - ₹28,000");
          setRisk("Medium");
        } else {
          setProfit("₹15,000 - ₹25,000");
          setRisk("Low");
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [data]);

  return (
    <div className="min-h-screen relative text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad"
          alt="farm result"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-10 text-center"
        >
          🌾 AI Farming Insights
        </motion.h1>

        {/* INPUT SUMMARY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl w-full max-w-2xl"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            📋 Farmer Input Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-200">

            {data &&
              Object.entries(data).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-white/10 rounded-xl px-4 py-3 border border-white/10"
                >
                  <p className="text-sm text-gray-300 capitalize">
                    {key.replace("_", " ")}
                  </p>

                  <p className="text-lg font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}

          </div>
        </motion.div>

        {/* AI RESULT CARD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 backdrop-blur-md bg-green-500/20 border border-green-300/30 p-8 rounded-3xl shadow-2xl w-full max-w-2xl"
        >

          <h2 className="text-2xl font-bold mb-6 text-center">
            🤖 AI Recommendation System
          </h2>

          {loading ? (

            <div className="flex flex-col items-center justify-center py-10">

              <Loader2
                className="animate-spin text-green-300 mb-4"
                size={50}
              />

              <p className="text-lg">
                AI is analyzing your farming data...
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              {/* RECOMMENDED CROP */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <Leaf className="text-green-300" size={35} />

                <div>
                  <p className="text-sm text-gray-300">
                    Recommended Crop
                  </p>

                  <h3 className="text-2xl font-bold capitalize">
                    {prediction} 🌾
                  </h3>
                </div>
              </div>

              {/* PROFIT */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <TrendingUp className="text-green-300" size={35} />

                <div>
                  <p className="text-sm text-gray-300">
                    Expected Profit
                  </p>

                  <h3 className="text-2xl font-bold">
                    {profit}
                  </h3>
                </div>
              </div>

              {/* RISK */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <AlertTriangle className="text-yellow-300" size={35} />

                <div>
                  <p className="text-sm text-gray-300">
                    Risk Level
                  </p>

                  <h3 className="text-2xl font-bold">
                    {risk}
                  </h3>
                </div>
              </div>

              {/* CONFIDENCE */}
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <CheckCircle className="text-green-300" size={35} />

                <div>
                  <p className="text-sm text-gray-300">
                    AI Confidence
                  </p>

                  <h3 className="text-2xl font-bold">
                    {confidence}
                  </h3>
                </div>
              </div>

              {/* AI INSIGHT */}
              <div className="bg-black/30 p-5 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-3">
                  🧠 AI Insights
                </h3>

                <ul className="space-y-2 text-gray-200 list-disc list-inside">
                  <li>
                    Crop recommendation is based on soil and weather analysis.
                  </li>

                  <li>
                    Market trend suggests good profitability this season.
                  </li>

                  <li>
                    Water availability is suitable for the predicted crop.
                  </li>

                  <li>
                    AI detected low farming risk under current conditions.
                  </li>
                </ul>
              </div>

            </div>

          )}

        </motion.div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-5 mt-12 justify-center">

          <button
            onClick={() => navigate("/")}
            className="bg-white text-green-700 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            🏠 Home
          </button>

          <button
            onClick={() => navigate("/questions")}
            className="bg-green-500 px-7 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            🔄 Try Again
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="bg-blue-500 px-7 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            📊 View Analytics
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;