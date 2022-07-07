import React from "react";
import img from "../../assets/img.jpg";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, _id, role } = user;

  const makeAdmin = () => {
    const url = `https://nameless-tundra-09432.herokuapp.com/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("SORRY! You cannot made an admin.😔");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`YAY!! you've successfully made an admin.👍`);
        }
      });
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Kabir</div>
            <div className="text-sm opacity-50">Brazil</div>
          </div>
        </div>
      </td>
      <td>{_id}</td>
      <td>{email}</td>
      <th>
        <div className="flex flex-col space-y-2">
          {role !== "admin" && (
            <button
              onClick={makeAdmin}
              className="btn btn-outline btn-primary text-gray-600 text-[14px]  btn-xs"
            >
              Make Admin
            </button>
          )}
          <button className="btn btn-primary text-gray-600 text-[14px]  btn-xs">
            Remove user
          </button>
        </div>
      </th>
    </tr>
  );
};

export default UserRow;
