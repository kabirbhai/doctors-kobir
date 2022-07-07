import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  console.log(appointments);

  if (user) {
    const email = user.email;
    const url = `http://localhost:5000/booking?patient=${email}`;
    fetch(url).then((res) => res.json().then((data) => setAppointments(data)));
  }

  return (
    <section>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Slots</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.treatment}</td>
                <td>{a.patient}</td>
                <td>{a.slot}</td>
                <td>{a.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyAppointment;
