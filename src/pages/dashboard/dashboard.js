import React from "react";
import { Link, Outlet } from "react-router-dom";

const dashboard = () => {
  return (
    <section>
      <div class="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h1 className="text-center text-2xl py-4 text-gray-600">
            WELCOME TO YOUR DASHBOARD
          </h1>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboard-drawer" class="drawer-overlay"></label>
          <ul class="menu p-2 overflow-y-auto w-60 bg-gray-200  text-base-content">
            <li>
              <Link
                className="border border-cyan-900 my-1 text-black"
                to="/dashboard"
              >
                My Appointment
              </Link>
            </li>
            <li>
              <Link
                className="border border-cyan-900 my-1 text-black"
                to="/dashboard/myReview"
              >
                My Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default dashboard;
