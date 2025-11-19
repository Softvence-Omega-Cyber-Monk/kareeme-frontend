import Footer from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navber";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>

      <main className="bg-gradient-to-r from-[#0F131B] via-[#0A1C19] to-[#052318]">
        <div>
          <Navbar />
           <Outlet />
           <Footer></Footer>
        </div>
       
        
      </main>

    </div>
  );
};

export default Layout;
