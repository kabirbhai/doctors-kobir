import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";
import DeleteDoctorModal from "./DeleteDoctorModal";
import ManageDoctorRow from "./ManageDoctorRow";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://nameless-tundra-09432.herokuapp.com/doctor", {
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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Email</th>
              <th>Specialty</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((d, index) => (
              <ManageDoctorRow
                key={d._id}
                refetch={refetch}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
                doctor={d}
              />
            ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <DeleteDoctorModal
          refetch={refetch}
          setDeleteDoctor={setDeleteDoctor}
          deleteDoctor={deleteDoctor}
        />
      )}
    </section>
  );
};

export default ManageDoctors;
