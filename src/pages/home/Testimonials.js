import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "kabir",
      review: "",
      location: "America",
      img: people1,
    },
    {
      _id: 2,
      review: "",
      name: "Sahrul",
      location: "Canada",
      img: people2,
    },
    {
      _id: 3,
      name: "labibMursedreza",
      review: "",
      location: "India",
      img: people3,
    },
  ];
  return (
    <section className="container mx-auto">
      <div className="flex justify-between my-8">
        <div>
          <h1 className="text-secondary">TESTIMONIALS</h1>
          <h4 className="text-3xl">What Our patient Says</h4>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
