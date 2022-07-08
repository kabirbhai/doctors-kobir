import React from "react";
import { toast } from "react-toastify";

const DeleteDoctorModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
  const { name, email } = deleteDoctor;
  const handleDelete = () => {
    const url = `https://nameless-tundra-09432.herokuapp.com/doctor/${email}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Delete successfully");
          setDeleteDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-doctor-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-warning">
            Are you sure you want to delete
            <span className="text-xl ml-2">{name}!</span>
          </h3>
          <p className="py-4">
            I am sorry!! but I dont't know why yor're deleting me. but anyway I
            will come back soon!
          </p>
          <div className="modal-action">
            <button
              onClick={handleDelete}
              className="btn btn-error text-[15px]  btn-xs"
            >
              DELETE
            </button>
            <label
              htmlFor="delete-doctor-modal"
              className="btn btn-primary text-[15px]   btn-xs  modal-button"
            >
              CANCEL
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDoctorModal;
