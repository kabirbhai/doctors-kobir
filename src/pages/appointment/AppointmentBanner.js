import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
import backgroundBanner from "../../assets/images/bg.png";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${backgroundBanner})`,
        backgroundSize: "cover",
      }}
    >
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <div className="pr-6">
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
          <div>
            <img src={chair} class="max-w-lg rounded-lg shadow-2xl" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
