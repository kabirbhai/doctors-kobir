import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// pages and components
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./pages/shared/Navbar";
import Login from "./pages/login/Login";
import Footer from "./pages/shared/Footer";
import Appointment from "./pages/appointment/Appointment";
import Signup from "./pages/login/Signup";
import RequireAuth from "./pages/login/RequireAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import Review from "./pages/review/Review";
import Contact from "./pages/contact/Contact";
import MyAppointment from "./pages/dashboard/MyAppointment";
import MyReview from "./pages/dashboard/MyReview";
import MyHistory from "./pages/dashboard/MyHistory";
import RequireAdmin from "./pages/login/RequireAdmin";
import Users from "./pages/dashboard/Users";
import AddDoctor from "./pages/dashboard/AddDoctor";
import ManageDoctors from "./pages/dashboard/ManageDoctors";
import Payment from "./pages/dashboard/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
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
          <Route path="payment/:paymentId" element={<Payment />} />
          <Route
            path="allUser"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor />
              </RequireAdmin>
            }
          />
          <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          />
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
