import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiUsers,
  FiTool,
  FiFileText,
  // FiSettings,
  FiTag,
  FiCreditCard,
  // FiBarChart,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
// import { FaPercent } from "react-icons/fa";
import bgVideo from "/BgVideo.mp4";

const navLinks = [
  { id: 1, name: "Dashboard", path: "/dashboard", icon: <FiMenu /> },
  { id: 2, name: "All Pods", path: "/dashboard/customers", icon: <FiUsers /> },
  { id: 3, name: "My Seeds", path: "/dashboard/serviceprovider", icon: <FiTool /> },
  { id: 4, name: "Dispute", path: "/dashboard/dispute", icon: <FiFileText /> },
  { id: 5, name: "Transactions", path: "/dashboard/transactions", icon: <FiCreditCard /> },
  { id: 6, name: "Bookings", path: "/dashboard/bookings", icon: <FiTag /> },
  

];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
     <video
              className="fixed top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2  hidden md:block     z-[11]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      <div
        className={`fixed top-0  left-0 w-[60vw] md:w-64 h-full  text-white md:block transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static z-50 md:overflow-y-auto scrollbar-hide`}
      >
        {/* Logo Section */}
        <div className="hidden md:flex md:justify-center md:items-center">
          <img src="/logo.png" alt="Logo" className="w-32 h-24 p-4" />
        </div>

        {/* Navigation Section */}
        <nav className="h-full overflow-y-scroll scrollbar-hide flex flex-col items-start gap-4 justify-center md:justify-start md:pl-[1vw]">
          {navLinks.map((link) => (
            <div key={link.id}>
              {link.isDropdown ? (
                <div
                  className="w-full px-[1vw] py-2 text-center md:text-left flex items-center space-x-2 cursor-pointer justify-between"
                  onClick={() => toggleDropdown(link.id)}
                >
                  <div className="flex items-center space-x-2">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                  <div className="block">
                    {openDropdown === link.id ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="w-full px-[1vw] py-2 text-center md:text-left flex items-center space-x-2 hover:no-underline hover:text-black"
                  onClick={toggleSidebar}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              )}

              {/* Render Dropdown if it exists */}
              {link.isDropdown && openDropdown === link.id && (
                <div
                  className={`h-full overflow-y-auto scrollbar-hide ${link.id === 10 ? "md:mb-28" : ""
                    }`}
                >
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.id}
                      to={subLink.path}
                      className="block text-sm text-left px-4 py-2 hover:no-underline hover:text-black"
                      onClick={toggleSidebar}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for Smaller Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
