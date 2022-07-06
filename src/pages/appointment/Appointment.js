import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <section>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
    </section>
  );
};

export default Appointment;
