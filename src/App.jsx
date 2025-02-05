import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import ServiceProvider from "./pages/ServiceProvider";
import Dispute from "./pages/Dispute";
import Transactions from "./pages/Transactions";
import Booking from "./pages/Booking";
// import bgVideo from "/BgVideo.mp4";

const App = () => {
  return (

    // <div className="relative overflow-hidden h-full">
    //   <>
    //     {/* Background video for desktop */}
    //     <video
    //       className="fixed top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1] hidden md:block"
    //       autoPlay
    //       loop
    //       muted
    //       playsInline
    //     >
    //       <source src={bgVideo} type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>

    
    //   </>
  

    // <div className="absolute top-0 left-0 w-full h-full z-[-1]"></div>
    // <div className="relative z-10 text-white text-center"></div>

    
  

    <BrowserRouter>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard/customers" element={<Customers />} />
        <Route path="/dashboard/serviceprovider" element={<ServiceProvider />} />
        <Route path="/dashboard/dispute" element={<Dispute />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />
        <Route path="/dashboard/bookings" element={<Booking />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
};

export default App;





// import { Suspense, lazy, useEffect, useState } from "react";
// import { Route, Routes } from "react-router";

// // Import videos
// import bgMobile from "/assets/videos/BgMob.mp4";

// // Lazy load Home and About components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));

// // Synchronously import other components
// import Content from "./pages/Content";
// import Terms from "./pages/Terms";
// import Review from "./pages/Review";
// import Page404 from "./pages/404";

// // Loading Spinner Component
// const Loading = () => (
//   <div className="flex justify-center items-center h-screen space-x-2">
//     {[150, 300,450].map((delay) => (
//       <div
//         key={delay}
//         className="w-4 h-4 md:w-[1.5vw] md:h-[1.5vw] bg-purple-500 rounded-full animate-bounce"
//         style={{ animationDelay: `${delay}ms` }}
//       ></div>
//     ))}
//   </div>
// );

// const App = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

//   useEffect(() => {
//     // Simulate lazy loading of the video
//     const timer = setTimeout(() => {
//       setIsVideoLoaded(true);
//     }, 500); // Load video after 100ms

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   return (
   
//   );
// };

// export default App;