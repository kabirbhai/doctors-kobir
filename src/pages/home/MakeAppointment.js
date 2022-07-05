import React from "react";
import Doctor from "../../assets/images/doctor.png";
import background from "../../assets/images/appointment.png";
import PrimaryButton from "../shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${background})` }}
      className="container mx-auto flex  justify-center items-center "
    >
      <div className="hidden lg:flex flex-1 ">
        <img className="mt-[-160px]" src={Doctor} alt="" />
      </div>
      <div className="flex-1 ml-4">
        <h1 className="text-secondary uppercase my-3">Appointment</h1>
        <h1 className="text-white text-4xl mb-2">Make an appointment Today!</h1>
        <p className="text-white mb-6">
          Please make your appointment here. we provide a good service for you.
          and you'll be very happy to take our service. sure! okay so let's get
          started. Don't worry we can promise with you that we will 100% money
          back grantee. make sure you're subscribe our website. Thanks!! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nemo?
          Culpa, voluptatem velit atque molestias aut assumenda incidunt ipsa
          perspiciatis perferendis enim ut nemo totam repellendus vitae
          architecto. Sint, nisi.
        </p>
        <PrimaryButton>GET STARTED</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
