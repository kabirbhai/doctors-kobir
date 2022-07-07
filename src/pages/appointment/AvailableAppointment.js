import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

// IMPORT PAGES
import BookingModal from "./BookingModal";
import Service from "./Service";
import Loading from "../shared/Loading";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(("available", formattedDate), () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="container mx-auto">
      <h1 className="text-secondary text-2xl text-center my-5 py-5">
        Available Appointment on {format(date, "PP")}
      </h1>

      {/* APPOINTMENT CARD  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {services?.map((service) => (
          <Service
            setTreatment={setTreatment}
            key={service._id}
            service={service}
          />
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            date={date}
            refetch={refetch}
            treatment={treatment}
            setTreatment={setTreatment}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppointment;
