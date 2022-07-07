import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/shared/Navbar";
import Login from "./pages/login/Login";
import Footer from "./pages/shared/Footer";
import Appointment from "./pages/appointment/Appointment";
import Signup from "./pages/login/Signup";
import RequireAuth from "./pages/login/RequireAuth";
import Dashboard from "./pages/dashboard/dashboard";
import MyAppointment from "./pages/dashboard/MyAppointment";
import MyReview from "./pages/dashboard/MyReview";
import MyHistory from "./pages/dashboard/MyHistory";
import Users from "./pages/dashboard/Users";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="myReview" element={<MyReview />} />
          <Route path="myHistory" element={<MyHistory />} />
          <Route path="allUser" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
