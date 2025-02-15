import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-blue-500 via-purple-500 bg-pink-500">
      <button
        className="p-4 bg-gray-500 rounded-xl text-white shadow-lg hover:scale-110 duration-1000"
        onClick={() => navigate("/dashboard")}
      >
        Click here for Dashboard view
      </button>
    </div>
  );
};

export default Landing;
