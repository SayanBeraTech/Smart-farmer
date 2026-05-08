import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Loading from "./pages/Loading";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/questions" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;