import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../pages/shared/Loading";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const { data: services, isLoading } = useQuery("service", () =>
    fetch("https://nameless-tundra-09432.herokuapp.com/service", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const imageStorageKey = "ffd9383cdb0f5adc4924f746461b0adc";
  const handleAddDoctor = (e) => {
    e.preventDefault();
    const inputFile = document.getElementById("image");
    const specialty = e.target.specialty.value;

    const formData = new FormData();
    formData.append("image", inputFile.files[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const img = data.data.url;
          const doctor = {
            name: name,
            img: img,
            specialty: specialty,
            location: location,
            email: email,
          };
          //send data to your own database
          const url = `https://nameless-tundra-09432.herokuapp.com/doctor`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.insertedId) {
                toast.success("Doctor added successfully!!");
                e.target.reset();
              } else {
                toast.error("Failed to made a doctor");
              }
            });
        }
      });
  };
  return (
    <section>
      <div className=" w-1/2 mx-auto">
        <h1 className="py-6 text-2xl text-center uppercase">Add a doctor</h1>
        <form onSubmit={handleAddDoctor} className=" w-1/2 mx-auto">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            required
            placeholder="Name"
            className="input input-bordered mb-2 w-full"
          />

          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            required
            placeholder="Email"
            className="input input-bordered block mb-2 w-full"
          />

          <label htmlFor="location">Location</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            required
            placeholder="Location"
            className="input input-bordered block mb-2 w-full"
          />

          <label htmlFor="specialty">Specialty</label>
          <select
            name="specialty"
            id="specialty"
            required
            className="select select-bordered block mb-2 w-full"
          >
            {services.map((s) => (
              <option key={s._id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <label htmlFor="image">Image</label>
          <input
            className="input input-bordered mb-2 w-full "
            type="file"
            required
            id="image"
            name="img"
          />

          <input
            type="submit"
            value="ADD DOCTOR"
            className="btn btn-primary "
          ></input>
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;

//yup
