import React from "react";
import chair from "../../assets/images/chair.png";
import backgroundBanner from "../../assets/images/bg.png";

const AppointmentBanner = () => {
  return (
    <section
      style={{
        background: `url(${backgroundBanner})`,
        backgroundSize: "cover",
      }}
    >
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <img src={chair} class="max-w-md rounded-lg shadow-2xl" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
