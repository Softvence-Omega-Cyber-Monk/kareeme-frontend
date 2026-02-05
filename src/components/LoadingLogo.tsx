import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";

export const LoadingLogo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
        {/* Rotating Star Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={star}
            alt="Loading"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover animate-[spin_12s_linear_infinite]"
          />
        </div>

        {/* Center Logo (Static) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover z-10 shadow-lg animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};
