import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <header className="w-full h-20 md:h-[5vw] text-white p-2 md:py-4 flex items-center justify-between md:px-[2vw]">
      <div className=" hidden md:flex w-[10vw] h-[2.5vw] overflow-hidden cursor-pointer">
        <img onClick={()=>navigate("/dashboard")} src="/logo.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Menu icon (for mobile) */}
      <div className="md:hidden">
        <button className="text-white p-2 rounded">
          <FiMenu size={24} onClick={() => setIsOpen(true)} />
        </button>
      </div>

      <div className="flex items-center space-x-4 relative z-[999] ">
        {/* Notification icon */}
        <button className="text-white p-2 rounded">
          <FiBell size={24} />
        </button>

        {/* Account icon with dropdown */}
        <div className="relative">
          <button className="text-white p-2 rounded focus:outline-none">
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
