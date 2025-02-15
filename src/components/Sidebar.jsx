import { useNavigate } from "react-router-dom";
import { FiMenu, FiUsers, FiCreditCard, FiX } from "react-icons/fi";

const navLinks = [
  { id: 1, name: "Dashboard Insights", path: "/dashboard", icon: <FiMenu /> },
  { id: 2, name: "Users", path: "/dashboard/Users", icon: <FiUsers /> },
  {
    id: 3,
    name: "Transactions/Accounting",
    path: "/dashboard/transactions",
    icon: <FiCreditCard />,
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Sidebar Modal for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-20 z-50 md:hidden">
          <div className="fixed top-0 left-0 w-52 h-full bg-slate-600 text-white p-4">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </button>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <div key={link.id} onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-2 p-2 hover:bg-gray-500 rounded">
                    <span onClick={() => navigate(link.path)}>{link.name}</span>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed w-64 h-full text-white text-[1.2vw]">
        <nav className="flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <div key={link.id}>
              <div className="w-full flex items-center gap-2 p-2 ">
                <p
                  className="w-full h-full cursor-pointer"
                  onClick={() => navigate(link.path)}
                >
                  {link.name}
                </p>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
