import { useState } from "react";
import questions from "../data/questions";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function Question() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswer = async (option) => {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const data = {
        location: newAnswers[0],
        soil: newAnswers[1],
        water: newAnswers[2],
        weather: newAnswers[3],
        land_size: newAnswers[4],
        fertilizer: newAnswers[5],
        budget: newAnswers[6],
        transport: newAnswers[7],
        market_distance: newAnswers[8],
      };

      await axios.post("http://localhost:5000/api/farmer/save", data);
      navigate("/loading");

      setTimeout(() => {
        navigate("/result", { state: data });
      }, 2500);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen relative text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
          alt="farm"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16">

        {/* PROGRESS BAR */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-white/30 rounded">
            <div
              className="h-2 bg-green-400 rounded"
              style={{
                width: `${((step + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-sm mt-2 text-gray-200">
            Step {step + 1} of {questions.length}
          </p>
        </div>

        {/* QUESTION CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
          >
            <h2 className="text-2xl font-semibold mb-6">
              {questions[step].question}
            </h2>

            {/* OPTIONS */}
            <div className="grid gap-4">
              {questions[step].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-white/20 py-3 rounded-xl hover:bg-green-400 hover:text-black transition"
                >
                  {option}
                </button>
              ))}
            </div>

            {/* BACK BUTTON */}
            {step > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 text-sm text-gray-300 hover:text-white"
              >
                ← Back
              </button>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

export default Question;