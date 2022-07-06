import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date }) => {
  const { name, slots, _id } = treatment;
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-3xl text-secondary">{name}</h3>
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-5"
          >
            ✕
          </label>
          <form className="grid justify-items-center gap-3 mt-2">
            <input
              type="text"
              value={format(date, "PP")}
              class="input input-bordered w-full text-xl"
            />
            <input
              type="text"
              value={slots[0]}
              placeholder="Type here"
              class="input input-bordered w-full text-xl"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              class="input input-bordered w-full text-xl"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full text-xl"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              class="input input-bordered w-full text-xl "
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
