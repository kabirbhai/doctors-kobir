import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L48bjAevmEdl8xnRCa2aJmBKzr4s6yxjYupEql3i8gBU0nVGDyiW7LCX6lix71eXeqzJUzM0VRgjJnncjkbEeNV00Z3IBSjvY"
);

const Payment = () => {
  const { paymentId } = useParams();

  const url = `https://nameless-tundra-09432.herokuapp.com/booking/${paymentId}`;
  const { data: appointment, isLoading } = useQuery(
    ["booking", paymentId],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="card lg:max-w-lg shadow-xl">
        <div className="card-body text-center">
          <p className="font-bold text-2xl">
            Hello{" "}
            <strong className="text-secondary">
              {appointment.patientName}!
            </strong>
          </p>
          <h2 className="card-title">
            <p>
              Please pay for{" "}
              <strong className="text-secondary">
                {appointment.treatment}
              </strong>
            </p>
          </h2>
          <div className="card-actions flex-col items-center justify-center">
            <h1>
              We will see you in {appointment.data} at {appointment.slot}
            </h1>

            <p className="text-secondary">Pay: ${appointment.price}</p>
          </div>
        </div>
      </div>
      {/* payment card  */}
      <div className="card lg:max-w-lg shadow-xl">
        <div className="card-body ">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
