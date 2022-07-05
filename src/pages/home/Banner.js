import React from "react";
import chair from "../../assets/images/chair.png";
import bannerBackground from "../../assets/images/bg.png";
import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${bannerBackground})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      class="hero min-h-screen"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="banner" />
        <div>
          <h1 class="text-5xl font-bold">Your new smile start here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Banner;
