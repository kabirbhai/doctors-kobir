import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots, _id } = treatment;

  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const slot = e.target.slot.value;
    const booking = {
      patientId: _id,
      name: name,
      patient: email,
      phone: phone,
      slot: slot,
    };

    //  SEND DATA TO THE SERVER
    const url = "http://localhost:5000/booking";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    });

    // for temporary close modal
    setTreatment(null);
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-3xl text-secondary">{name}</h3>
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-5"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="grid justify-items-center gap-3 mt-2"
          >
            <input
              type="text"
              readOnly
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full "
            />
            <input
              className="btn btn-secondary d-block w-full text-xl text-white"
              type="submit"
              value="SUBMIT"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
