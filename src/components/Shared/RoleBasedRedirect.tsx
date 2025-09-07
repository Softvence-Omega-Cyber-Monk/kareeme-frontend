// src/components/RoleBasedRedirect.tsx
import { useAppSelector } from "@/redux/hooks/redux-hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleBasedRedirect = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      switch (user.role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "client":
          navigate("/client/dashboard");
          break;
        case "distributor":
          navigate("/distributor/dashboard");
          break;
        case "accountant":
          navigate("/accountant/dashboard");
          break;
        default:
          navigate("/");
      }
    }
  }, [user, navigate]);

  return <div>Redirecting...</div>;
};

export default RoleBasedRedirect;

// // src/components/RoleBasedRedirect.tsx
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "@/redux/hooks";

// const RoleBasedRedirect = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       switch (user.role) {
//         case "admin":
//           navigate("/admin/dashboard");
//           break;
//         case "client":
//           navigate("/client/dashboard");
//           break;
//         case "distributor":
//           navigate("/distributor/dashboard");
//           break;
//         case "accountant":
//           navigate("/accountant/dashboard");
//           break;
//         default:
//           navigate("/");
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//     </div>
//   );
// };

// export default RoleBasedRedirect;
