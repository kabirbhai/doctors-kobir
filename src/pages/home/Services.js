import React from "react";
import Service from "./Service";
import img1 from "../../assets/images/fluoride.png";
import img2 from "../../assets/images/cavity.png";
import img3 from "../../assets/images/whitening.png";
import img4 from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-secondary text-center uppercase">Our services</h1>
      <h1 className="text-center text-3xl">Services we provide</h1>
      <div className="pt-12 grid gap-5 grid-cols-1 lg:grid-cols-3">
        <Service title={"Fluoride Treatment"} img={img1} />
        <Service title={"Cavity Filling"} img={img2} />
        <Service title={"Teeth Whitening"} img={img3} />
      </div>

      {/* HERO SECTION */}
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row">
          <img src={img4} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="pl-44">
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
