import React from "react";

const Service = ({ service, setTreatment }) => {
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary justify-center">
          {service.name}
        </h2>
        {/* <p>{slots.length > 0 'sp' }</p> */}
        <p>
          {service.slots?.length > 0 ? (
            <span>{service.slots[0]}</span>
          ) : (
            <span>Try another day</span>
          )}
        </p>
        <p>{service.slots?.length} spaces available</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            className="btn btn-secondary modal-button"
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
