import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h1 className="text-center text-2xl py-4 text-gray-600">
            WELCOME TO YOUR DASHBOARD
          </h1>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-2 overflow-y-auto w-60 bg-gray-200  text-base-content">
            <li>
              <Link
                className="border border-cyan-900 my-1 text-black"
                to="/dashboard"
              >
                MY APPOINTMENT
              </Link>
            </li>
            <li>
              <Link
                className="border border-cyan-900 my-1 text-black"
                to="/dashboard/myReview"
              >
                MY REVIEW
              </Link>
            </li>
            <li>
              <Link
                className="border border-cyan-900 my-1 text-black"
                to="/dashboard/myHistory"
              >
                MY HISTORY
              </Link>
            </li>
            {admin && (
              <li>
                <Link
                  className="border border-cyan-900 my-1 text-black"
                  to="/dashboard/allUser"
                >
                  ALL USER
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
