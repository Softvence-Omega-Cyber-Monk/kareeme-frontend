import loginphoto from "@/assets/photo/signup.svg";
import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className="max-w-5xl w-full  flex overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:flex w-1/2  items-center justify-center">
          <img
            src={loginphoto}
            alt="artist"
            className="h-full w-full object-cover rounded-l-xl"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans mb-2">
            LOG IN YOUR ARTIST ACCOUNT
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Start your journey with us! Fill out the details below to get access
            to your dashboard, music distribution, and more.
          </p>

          <form className="space-y-4">
            {/* Email */}
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-white font-sans mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-[20px] bg-[#0F2B2E] text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            {/* <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-[20px] bg-[#0F2B2E] text-white focus:ring-2 focus:ring-blue-500 outline-none"
            /> */}

            <div className="flex flex-col mb-4">
              <label htmlFor="password" className="text-white font-sans mb-2">
                Password
              </label>

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-[20px] bg-[#0F2B2E] text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                />

                {/* Show eye only if password is not empty */}
                {password && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible size={22} />
                    ) : (
                      <AiOutlineEye size={22} />
                    )}
                  </button>
                )}
              </div>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-sans py-3 rounded-[20px] transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <p className="text-sm text-[#01D449] mt-4 text-center">
            Forget Password
          </p>
          <p className="text-sm text-gray-400 mt-4 text-center ">
            Don’t have an account?
            <a href="/signup" className="text-blue-400 hover:text-sky-300 ml-1">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// // src/pages/Login.tsx
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { useLoginMutation } from "@/redux/hooks/authApi";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { setCredentials } from "@/redux/features/auth/authSlice";
// import loginPhoto from "@/assets/photo/signup.png";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [login, { isLoading, error }] = useLoginMutation();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const { user } = useAppSelector((state) => state.auth);

//   // Redirect if already logged in
//   React.useEffect(() => {
//     if (user) {
//       redirectBasedOnRole(user.role);
//     }
//   }, [user]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const result = await login(formData).unwrap();
//       dispatch(setCredentials(result));
//       redirectBasedOnRole(result.data.user.role);
//     } catch (err) {
//       console.error("Login failed:", err);
//     }
//   };

//   const redirectBasedOnRole = (role: string) => {
//     switch (role) {
//       case "admin":
//         navigate("/admin/dashboard");
//         break;
//       case "client":
//         navigate("/client/dashboard");
//         break;
//       case "distributor":
//         navigate("/distributor/dashboard");
//         break;
//       case "accountant":
//         navigate("/accountant/dashboard");
//         break;
//       default:
//         navigate("/");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="max-w-5xl w-full bg-gradient-to-r from-[#021B17] to-[#041C2C] rounded-xl shadow-lg flex overflow-hidden">
//         {/* Left Side - Image */}
//         <div className="hidden md:flex w-1/2 bg-[#0a0a0a] items-center justify-center">
//           <img
//             src={loginPhoto}
//             alt="artist"
//             className="h-full w-full object-cover rounded-l-xl"
//           />
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
//           <h2 className="text-2xl md:text-3xl font-bold mb-2">
//             LOG IN YOUR ARTIST ACCOUNT
//           </h2>
//           <p className="text-gray-400 mb-6 text-sm">
//             Start your journey with us! Fill out the details below to get access
//             to your dashboard, music distribution, and more.
//           </p>

//           {error && (
//             <div className="mb-4 p-2 bg-red-900 text-red-100 rounded-md">
//               {"data" in error ? error.data.message : "Login failed"}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Email */}
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-md bg-[#0F2B2E] text-white focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//             {/* Password */}
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-md bg-[#0F2B2E] text-white focus:ring-2 focus:ring-blue-500 outline-none"
//             />

//             {/* Login Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition disabled:opacity-50"
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="text-sm text-[#01D449] mt-4 text-center">
//             Forget Password
//           </p>
//           <p className="text-sm text-gray-400 mt-4 text-center ">
//             I have no account?
//             <Link to="/signup" className="text-blue-400 hover:text-sky-800 ml-1">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Link, useNavigate } from "react-router-dom";
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import mail from "../assets/Auth/telephone.svg";
// import password from "../assets/Auth/password.svg";
// import loginImg from "../assets/Auth/login.svg";
// import CommonButton from "@/components/Reuseable/CommonButton";
// import CommonHeading from "@/components/Reuseable/CommonHeading";
// import CommonWrapper from "@/common/CommonWrapper";
// import { useAppSelector } from "@/redux/hooks/redux-hook";
// import { jwtDecode, JwtPayload } from "jwt-decode";

// // Define your JWT payload interface
// interface CustomJwtPayload extends JwtPayload {
//   role: string;
//   // Add other custom properties from your JWT if needed
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any;
// }

// const loginSchema = z.object({
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// type LoginFormInputs = z.infer<typeof loginSchema>;

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>({ resolver: zodResolver(loginSchema) });
//   const [user, setUser] = useState<CustomJwtPayload | null>(null);
//   console.log(user);

//   const navigate = useNavigate();
//   const [login, { isLoading, isSuccess, data }] = useLoginMutation();
//   const token = useAppSelector((state) => state?.auth?.token);

//   useEffect(() => {
//     if (token) {
//       try {
//         const decoded = jwtDecode<CustomJwtPayload>(token);
//         setUser(decoded);

//         // Redirect based on role from decoded token
//         if (decoded.role === "admin") {
//           navigate("/admin-dashboard");
//         } else if (decoded.role === "marchant") {
//           navigate("/merchant-dashboard");
//         } else {
//           navigate("/"); // Default redirect for other roles
//         }
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, [token, navigate]);

//   const onSubmit = async (data: LoginFormInputs) => {
//     try {
//       await login({
//         email: data.email,
//         password: data.password,
//       }).unwrap();
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   // Store token and user data when login is successful
//   useEffect(() => {
//     if (isSuccess && data?.data?.accessToken) {
//       const { accessToken, user } = data.data;
//       Cookies.set("token", accessToken, { expires: 7 });
//       localStorage.setItem("user", JSON.stringify(user));
//     }
//   }, [isSuccess, data]);

//   const styles = {
//     inputWrapper: "relative flex items-center",
//     input:
//       "w-full py-2 md:py-3 pl-12 pr-4 rounded-[8px] border border-primary-border bg-white focus:outline-none focus:border-blue-400 focus:shadow-2xl placeholder:text-sm placeholder:text-gray-400",
//     icon: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 contrast-125",
//     errorWrapper: "h-5 mt-1",
//     error: "text-sm text-red-500",
//   };

//   return (
//     <CommonWrapper>
//       <div className="relative">
//         <div className="w-full mx-auto bg-white rounded-[32px] shadow-[0_4px_24px_0_rgba(0,0,0,0.1)] px-6 md:px-[50px] lg:px-[100px] py-10">
//           {/* Header */}
//           <div className="text-center mb-12 md:mb-[67px]">
//             <CommonHeading
//               title="Login"
//               description="We guarantee reliable delivery of your products to your customers, at the right location in the right time through our efficient distribution channel."
//             />
//           </div>

//           {/* Form */}
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="lg:w-3/4 mx-auto lg:space-y-2"
//           >
//             {/* Email */}
//             <div>
//               <div className={styles.inputWrapper}>
//                 <img src={mail} className={styles.icon} alt="Email Icon" />
//                 <input
//                   type="email"
//                   placeholder="Email address"
//                   {...register("email")}
//                   className={styles.input}
//                 />
//               </div>
//               <div className={styles.errorWrapper}>
//                 {errors.email && (
//                   <p className={styles.error}>{errors.email.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <div className={styles.inputWrapper}>
//                 <img
//                   src={password}
//                   className={styles.icon}
//                   alt="Password Icon"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   {...register("password")}
//                   className={styles.input}
//                 />
//               </div>
//               <div className={styles.errorWrapper}>
//                 {errors.password && (
//                   <p className={styles.error}>{errors.password.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* Submit Button */}
//             <CommonButton
//               btnTitle={isLoading ? "Logging in..." : "Login"}
//               type="submit"
//               disabled={isLoading}
//             />

//             {/* Signup Link */}
//             <p className="text-center text-sm text-paragraph-gray mt-3">
//               Don't have an account?{" "}
//               <Link to="/signup">
//                 <span className="text-primary-orange cursor-pointer font-semibold">
//                   SignUp here
//                 </span>
//               </Link>
//             </p>
//           </form>

//           {/* Illustration */}
//           <img
//             src={loginImg}
//             alt="Login Illustration"
//             className="absolute bottom-4 left-1 pr-6 w-[160px] md:w-[180px] lg:w-[220px] hidden lg:block"
//           />
//         </div>
//       </div>
//     </CommonWrapper>
//   );
// };

// export default Login;
