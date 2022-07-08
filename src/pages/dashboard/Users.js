import React from "react";
import { useQuery } from "react-query";
import Loading from "../shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://nameless-tundra-09432.herokuapp.com/user", {
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
    <section className="text-center">
      <h1>All user {users.length} </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>Id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                refetch={refetch}
                key={user._id}
                index={index}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
