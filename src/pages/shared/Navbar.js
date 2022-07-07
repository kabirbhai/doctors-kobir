import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home"> Home</Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/appointment"> Appointment</Link>
      </li>
      <li>
        <Link to="/home"> Reviews</Link>
      </li>
      <li>
        <Link to="/home"> Contact us</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>{" "}
        </li>
      )}
      <li>
        <Link to="/login">
          {" "}
          {!user ? "Login" : <span onClick={logOut}>Logout</span>}
        </Link>
      </li>
    </>
  );
  return (
    <header className="relative">
      <nav className="navbar justify-around sticky top-0 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn   btn-ghost lg:hidden">
              X
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 -z-20 shadow  rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost  text-xl uppercase">
            KabirBhai
          </Link>
        </div>
        <div className="text-left navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lef p-0">{menuItems}</ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
