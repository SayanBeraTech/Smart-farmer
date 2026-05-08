import { motion } from "framer-motion";

function Loading() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl mb-6"
      >
        Analyzing your farm 🌾
      </motion.h1>

      <div className="space-y-2 text-gray-300">
        <p>✔ Checking soil quality...</p>
        <p>✔ Analyzing weather conditions...</p>
        <p>✔ Calculating profit...</p>
        <p>✔ Generating recommendations...</p>
      </div>

    </div>
  );
}

export default Loading;