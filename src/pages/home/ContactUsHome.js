import React from "react";
import background from "../../assets/images/appointment.png";

const ContactUsHome = () => {
  return (
    <section className="mt-24" style={{ background: `url(${background})` }}>
      <div className="container mx-auto">
        <div className="py-6">
          <h1 className=" text-secondary text-center">Contact us</h1>
          <h1 className="text-center text-3xl text-white">Get in touch</h1>
        </div>
        <form className="w-1/2 mx-auto pb-4">
          <input
            type="text"
            placeholder="Email address"
            className="input input-bordered input-accent w-full mb-3"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-accent w-full mb-3 "
          />
          <textarea
            className="textarea textarea-accent w-full mb-3"
            placeholder="Message"
          ></textarea>
          <input
            className="btn bg-gradient-to-r text-black hover:text-white from-primary to-secondary block w-1/2 mx-auto"
            type="button"
            value="Submit"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUsHome;
