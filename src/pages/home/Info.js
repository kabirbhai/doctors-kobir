import React from "react";
import img1 from "../../assets/icons/clock.svg";
import img2 from "../../assets/icons/marker.svg";
import img3 from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <section className="container mx-auto ">
      <div className="card-container grid grid-cols-1 md:grid-cols-3 gap-5">
        <div class="card bg-gradient-to-tr from-primary to-secondary shadow-xl text-white">
          <div class="card-body flex-row justify-center items-center ">
            <figure>
              <img src={img1} alt="Movie" />
            </figure>
            <div>
              <h3 className="text-2xl">Opening Hours</h3>
              <p className="mt-2">
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        </div>
        {/* CARD 2  */}
        <div class="card bg-accent shadow-xl text-white">
          <div class="card-body flex-row justify-center items-center ">
            <figure>
              <img src={img2} alt="Movie" />
            </figure>
            <div>
              <h3 className="text-2xl">Visit Out Location</h3>
              <p className="mt-2">
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        </div>
        {/* CARD 3  */}
        <div class="card bg-gradient-to-tr from-primary to-secondary shadow-xl text-white">
          <div class="card-body flex-row justify-center items-center ">
            <figure>
              <img src={img3} alt="Movie" />
            </figure>
            <div>
              <h3 className="text-2xl">Contact us Now</h3>
              <p className="mt-2">
                If a dog chews shoes whose shoes does he choose?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
