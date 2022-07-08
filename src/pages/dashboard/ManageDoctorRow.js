import React from "react";

const ManageDoctorRow = ({ doctor, index, setDeleteDoctor }) => {
  const { name, email, img, location, specialty } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{specialty}</td>
      <th>
        <div className="flex flex-col space-y-2">
          <label
            onClick={() => setDeleteDoctor(doctor)}
            htmlFor="delete-doctor-modal"
            className="btn btn-secondary text-[14px]   btn-xs  modal-button"
          >
            DELETE
          </label>
        </div>
      </th>
    </tr>
  );
};

export default ManageDoctorRow;
