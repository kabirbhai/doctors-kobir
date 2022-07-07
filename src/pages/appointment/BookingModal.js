import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { name, slots, _id } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      date: formattedDate,
      treatment: name,
      patient: user.email,
      patientName: user.displayName,
      slot,
      phone: phone,
    };

    //  SEND DATA TO THE SERVER
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Your appointment is booked`);
        } else {
          toast.error(
            `Sorry😔! Your already have ${data?.booking?.treatment} at ${data?.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
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
            <input
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
              disabled
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="phone"
              required
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
