import video from "@/assets/video/animation-Video.mp4";
import Footer from "@/components/Home/Footer";
import { NavBar } from "@/components/Home/NavBar";

import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="relative">
      {/* ✅ Global Background Video (CLICK SAFE) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10 opacity-50 pointer-events-none"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen bg-linear-to-r from-[#061511]/98 via-[#061511]/84 to-[#061511]/98">
        <div className="sticky top-[32px] z-50">
          <NavBar />
        </div>
        <Outlet />
        {/* ✅ Footer is now clickable */}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;

// import video from "@/assets/video/animation-Video.mp4";
// import Footer from "@/components/Home/Footer";

// import { Navbar } from "@/components/Home/Navber";
// import { Outlet } from "react-router-dom";

// const Layout: React.FC = () => {
//   return (
//     <div className="relative">
//       {/*  Global Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
//       >
//         <source src={video} type="video/mp4" />
//       </video>

//       {/* <main className="bg-gradient-to-r from-[#05110E]/95 via-[#05110E]/75 to-[#05110E]/95 min-h-screen relative z-10"> */}
//       <main className="bg-gradient-to-r from-[#061511]/98 via-[#061511]/75 to-[#061511]/98 min-h-screen relative z-10">
//         <div>
//           <div className="sticky top-[32px] z-50">
//             <Navbar />
//           </div>
//           <Outlet />
//         </div>
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default Layout;
