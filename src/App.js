import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
