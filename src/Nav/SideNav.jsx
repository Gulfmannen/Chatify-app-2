import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SideNav = ({ token, setToken }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Token value:", token);
  }, [token]);

  const handleLogout = () => {
    console.log("Logging out");
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {token && (
        <button
          onClick={handleLogout}
          className="fixed top-4 left-4 z-50 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg focus:outline-none"
        >
          Logga ut
        </button>
      )}

      {}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="flex flex-col items-center mt-20 space-y-6">
          <ul className="text-lg text-white space-y-4">
            {!token ? (
              <>
                <li>
                  <Link
                    to="/"
                    className="block px-6 py-3 rounded-lg hover:bg-black-700"
                  >
                    Gå tillbaka till registrera
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="block px-6 py-3 rounded-lg hover:bg-gray-700"
                  >
                    Gå tillbaka till logga in
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
