// import Footer from "@/components/Home/Footer";
// import { Navbar } from "@/components/Home/Navber";
// import { Outlet } from "react-router-dom";

// const Layout: React.FC = () => {
//   return (
//     <div>

//       <main className="bg-gradient-to-r from-[#0F131B] via-[#0A1C19] to-[#052318]">
//         <div>
//           <div className="sticky top-1 z-50  ">
//             <Navbar />
//           </div>
//           <Outlet />
         
//           <Footer></Footer>
          
//         </div>


//       </main>

//     </div>
//   );
// };

// export default Layout;

import video from "@/assets/video/animation-Video.mp4"
import Footer from "@/components/Home/Footer";


import { Navbar } from "@/components/Home/Navber";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="relative">

      {/*  Global Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-50"
      >
        <source src={video} type="video/mp4" />
      </video>

      <main className="bg-gradient-to-r from-[#040F0C]/95 via-[#0A121E]/75 to-[#0A0C11]/95 min-h-screen relative z-10">
        <div>
          <div className="sticky top-1 z-50">
            <Navbar />
          </div>

          <Outlet />

       
        </div>
           <Footer />
      </main>

    </div>
  );
};

export default Layout;
