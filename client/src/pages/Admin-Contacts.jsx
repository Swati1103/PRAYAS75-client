import { useEffect, useState } from "react";
import { useAuth } from "../auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // defining the function deleteContactById

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <p className="text-6xl font-bold text- white">Admin Contact Data</p>

        <div className="bg-white my-4 rounded-lg text-black w-full">
          <div className=" text-xl font-serif  border-b-4 border-slate-600 w-full">
            <tr className="flex justify-between px-4 py-2">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Message</th>
              <th className="py-2">Delete</th>
            </tr>
          </div>
          <div>
            {contactData.map((curContactData, index) => {
              const { username, email, phone, message, _id } = curContactData;
              return (
                <div className=" flex justify-between my-4 font-mono" key={index}>
                  <p className="px-4 py-2">{username}</p>
                  <p className="px-4 py-2">{email}</p>
                  <p className="px-4 py-2">{phone}</p>
                  <p className="px-4  py-2">{message}</p>
                  <button
                      className="mr-4 bg-red-600 w-[6rem] text-white border-2 rounded-lg p-1"
                      onClick={() => deleteContactById(_id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
