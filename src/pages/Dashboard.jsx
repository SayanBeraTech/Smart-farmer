import {
  Bar,
  Pie,
  Line,
  Doughnut,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { motion } from "framer-motion";

import {
  Leaf,
  TrendingUp,
  DollarSign,
  CloudRain,
  ShieldCheck,
  Sprout,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function Dashboard() {

  // PROFIT DATA
  const cropData = {
    labels: ["Rice", "Wheat", "Maize", "Sugarcane"],
    datasets: [
      {
        label: "Expected Profit (₹)",
        data: [40000, 25000, 22000, 45000],
        backgroundColor: [
          "#22c55e",
          "#16a34a",
          "#15803d",
          "#166534",
        ],
        borderRadius: 10,
      },
    ],
  };

  // SOIL DATA
  const soilData = {
    labels: ["Loamy", "Clay", "Sandy"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: [
          "#22c55e",
          "#facc15",
          "#fb923c",
        ],
      },
    ],
  };

  // WEATHER TREND
  const weatherData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Rainfall Trend",
        data: [20, 35, 50, 65, 80, 95],
        borderColor: "#22c55e",
        tension: 0.4,
      },
    ],
  };

  // AI CONFIDENCE
  const confidenceData = {
    labels: ["Confidence"],
    datasets: [
      {
        data: [92, 8],
        backgroundColor: ["#22c55e", "#1f2937"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-green-200 to-green-400 p-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >

        <h1 className="text-5xl font-extrabold text-green-900 mb-4">
          🌾 Smart Farmer AI Dashboard
        </h1>

        <p className="text-gray-700 text-lg">
          AI-powered farming analytics and intelligent crop insights
        </p>

      </motion.div>

      {/* STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        {/* CARD 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <Leaf className="text-green-700 mb-4" size={45} />

          <p className="text-gray-600">
            Recommended Crop
          </p>

          <h2 className="text-3xl font-bold text-green-900">
            Rice 🌾
          </h2>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <DollarSign className="text-green-700 mb-4" size={45} />

          <p className="text-gray-600">
            Expected Profit
          </p>

          <h2 className="text-3xl font-bold text-green-900">
            ₹40,000
          </h2>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <CloudRain className="text-blue-600 mb-4" size={45} />

          <p className="text-gray-600">
            Rainfall Prediction
          </p>

          <h2 className="text-3xl font-bold text-blue-900">
            82%
          </h2>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >
          <ShieldCheck className="text-green-700 mb-4" size={45} />

          <p className="text-gray-600">
            Farming Risk
          </p>

          <h2 className="text-3xl font-bold text-green-900">
            Low
          </h2>
        </motion.div>

      </div>

      {/* CHART SECTION */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* BAR CHART */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-5">
            📊 Crop Profit Analysis
          </h2>

          <Bar data={cropData} />

        </motion.div>

        {/* PIE CHART */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-5">
            🌱 Soil Health Distribution
          </h2>

          <Pie data={soilData} />

        </motion.div>

        {/* LINE CHART */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl"
        >

          <h2 className="text-2xl font-bold mb-5">
            📈 Rainfall Analytics
          </h2>

          <Line data={weatherData} />

        </motion.div>

        {/* AI CONFIDENCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center"
        >

          <h2 className="text-2xl font-bold mb-5">
            🤖 AI Confidence
          </h2>

          <div className="w-64">
            <Doughnut data={confidenceData} />
          </div>

          <p className="mt-5 text-3xl font-bold text-green-700">
            92%
          </p>

        </motion.div>

      </div>

      {/* AI INSIGHTS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-10 bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
      >

        <div className="flex items-center gap-3 mb-5">
          <Sprout className="text-green-700" size={35} />

          <h2 className="text-3xl font-bold">
            AI Farming Insights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">

          <div className="bg-green-100 p-5 rounded-2xl">
            ✅ Rice is highly suitable due to current rainfall and soil conditions.
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
            📈 Market trends indicate high demand for rice this season.
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
            🌧 Rainfall prediction supports healthy crop growth.
          </div>

          <div className="bg-green-100 p-5 rounded-2xl">
            💰 Expected ROI is higher than previous farming seasons.
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default Dashboard;