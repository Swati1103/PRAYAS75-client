import { useState, useEffect } from "react";
import { useAuth } from "../auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users after delete: ${data}`);

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <div className="b">
      <div className="container">
        <p className="text-6xl font-bold text- white">Admin Users Data</p>
      </div>
      <div className="bg-white my-4 rounded-lg text-black">
        <table className="w-full">
          <thead className="">
            <tr className="text-xl font-serif  border-b-4 border-slate-600">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Phone</th>
              <th className="py-2">Update</th>
              <th className="py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
              return (
                <tr className="my-4 font-mono " key={index}>
                  <td className="px-10 py-2">{curUser.username}</td>
                  <td className="px-10 py-2"> {curUser.email}</td>
                  <td className="px-10 py-2">{curUser.phone}</td>
                  <td className="p-2">
                    <Link to={`/admin/users/${curUser._id}/edit`}>
                      <button
                        className="bg-blue-600 w-[6rem] text-white border-2 rounded-lg p-1"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="p-2">
                    <button
                      className="bg-red-600 w-[6rem] text-white border-2 rounded-lg p-1"
                      onClick={() => deleteUser(curUser._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
