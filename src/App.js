import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/shared/Navbar";
import Login from "./pages/login/Login";
import Footer from "./pages/shared/Footer";
import Appointment from "./pages/appointment/Appointment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
