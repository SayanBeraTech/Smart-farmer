import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, BarChart3, IndianRupee } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-5 backdrop-blur-md bg-white/10 border-b border-white/20">
          <h1 className="text-2xl font-bold tracking-wide">
            🌾 Smart Farmer
          </h1>

          <button
            onClick={() => navigate("/questions")}
            className="bg-green-500 px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </nav>

        {/* HERO */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-28">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Smart Farming with AI 🌱
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200"
          >
            Transform your farming decisions using intelligent crop recommendations,
            real-time analytics and profit predictions.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/questions")}
            className="bg-green-500 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition"
          >
            Start Farming Smart →
          </motion.button>
        </div>

        {/* FEATURES */}
        <div className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg"
          >
            <Leaf size={40} className="mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">
              Crop Recommendation
            </h3>
            <p className="text-gray-200">
              Choose the best crop based on soil, weather and resources.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg"
          >
            <IndianRupee size={40} className="mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">
              Profit Prediction
            </h3>
            <p className="text-gray-200">
              Estimate profit and reduce risk before farming decisions.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-lg"
          >
            <BarChart3 size={40} className="mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-2">
              Data Analytics
            </h3>
            <p className="text-gray-200">
              Visual insights of soil, crops, rainfall and market trends.
            </p>
          </motion.div>

        </div>

        {/* CTA SECTION */}
        <div className="text-center py-20">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Smarter? 🌾
          </h2>

          <button
            onClick={() => navigate("/language")}
            className="bg-green-500 px-10 py-4 rounded-full text-lg hover:bg-green-600 transition"
          >
            Get Started Now →
          </button>

        </div>

        {/* FOOTER */}
        <footer className="text-center py-6 text-gray-300 border-t border-white/20">
          © 2026 Smart Farmer | Built for Farmers ❤️
        </footer>

      </div>
    </div>
  );
}

export default Home;