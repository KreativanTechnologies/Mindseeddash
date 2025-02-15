import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar Modal State

  return (
    <div className="h-screen relative">
      {/* Background Video */}
      <div className="w-full h-full absolute -z-10">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/BgVideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main content area */}
      <div className="flex flex-col h-full z-10">
        {/* Header */}
        <Header setIsOpen={setIsOpen} /> {/* Pass setIsOpen to Header */}
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Sidebar for Desktop */}
          <div className="w-[23%] hidden md:block h-full overflow-hidden">
            <Sidebar />
          </div>

          {/* Sidebar Modal for Mobile */}
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Dynamic Content */}
          <main className="w-full h-full rounded-md bg-slate-900 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
