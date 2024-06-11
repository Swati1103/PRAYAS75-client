import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaRegListAlt, FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  // console.log("admin layout", user);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-between bg-blue-50 ">
      <div className="w-2/12 border-4 border-blue-400">
        <div className="">
          <div className="px-8 py-4 bg-black text-white">
            <nav>
              <ul className="flex flex-col justify-evenly h-[600px]">
                <li className="pl-10">
                  <NavLink to="/admin/users">
                    <FaUser className="text-4xl" /> Users
                  </NavLink>
                </li>
                <li className="pl-10">
                  <NavLink to="/admin/transactions">
                    {" "}
                    <FaRegListAlt className="text-4xl" /> Financial Transactions{" "}
                  </NavLink>
                </li>
                <li className="pl-10">
                  <NavLink to="/admin/report">
                    {" "}
                    <FaRegListAlt className="text-4xl" /> Generate Report{" "}
                  </NavLink>
                </li>
                <li className="pl-10">
                  <NavLink to="/admin/contacts">
                    {" "}
                    <FaMessage className="text-4xl" /> contacts{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-10/12 px-16 bg-black  py-10 text-white border-4 border-blue-400">
        <Outlet />
      </div>
    </div>
  );
};
