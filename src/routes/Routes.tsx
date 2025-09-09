import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import AdminDashboardPage from "@/pages/Admin/AdminDashboardPage";
import AdminLayout from "@/Layout/AdminLayout";
import ClientLayout from "@/Layout/ClientLayout";
import ClientDashboardPage from "@/pages/Client/ClientDashboardPage";
import ClientAnalyticsPage from "@/pages/Client/ClientAnalyticsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  /* Merchant Dashboard */
  {
    path: "/client-dashboard",
    element: <ClientLayout />,
    children: [
      { index: true, element: <ClientDashboardPage /> },
      { path: "dashboard", element: <ClientDashboardPage /> },
      { path: "analytics", element: <ClientAnalyticsPage /> },
    ],
  },
  /* Admin Dashboard */
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
    ],
  },
  /* Distributor Dashboard */
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
    ],
  },
  /* Accountant Dashboard */
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

// // src/routes/index.tsx
// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import ProtectedRoute from "./ProtectedRoute";
// import RoleBasedRedirect from "@/components/RoleBasedRedirect";
// import Login from "@/pages/Login";
// import Signup from "@/pages/Signup";
// import MerchantDashboardPage from "@/pages/Merchant/MerchantDashboardPage";
// import AdminDashboardPage from "@/pages/Admin/AdminDashboardPage";
// import DistributorDashboardPage from "@/pages/Distributor/DistributorDashboardPage";
// import AccountantDashboardPage from "@/pages/Accountant/AccountantDashboardPage";
// import AdminLayout from "@/Layout/AdminLayout";
// import ClientLayout from "@/Layout/ClientLayout";
// import DistributorLayout from "@/Layout/DistributorLayout";
// import AccountantLayout from "@/Layout/AccountantLayout";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/signup",
//         element: <Signup />,
//       },
//     ],
//   },
//   /* Client Dashboard */
//   {
//     path: "/client",
//     element: (
//       <ProtectedRoute requiredRole="client">
//         <ClientLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <RoleBasedRedirect /> },
//       { path: "dashboard", element: <MerchantDashboardPage /> },
//     ],
//   },
//   /* Admin Dashboard */
//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute requiredRole="admin">
//         <AdminLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <RoleBasedRedirect /> },
//       { path: "dashboard", element: <AdminDashboardPage /> },
//     ],
//   },
//   /* Distributor Dashboard */
//   {
//     path: "/distributor",
//     element: (
//       <ProtectedRoute requiredRole="distributor">
//         <DistributorLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <RoleBasedRedirect /> },
//       { path: "dashboard", element: <DistributorDashboardPage /> },
//     ],
//   },
//   /* Accountant Dashboard */
//   {
//     path: "/accountant",
//     element: (
//       <ProtectedRoute requiredRole="accountant">
//         <AccountantLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <RoleBasedRedirect /> },
//       { path: "dashboard", element: <AccountantDashboardPage /> },
//     ],
//   },
//   /* Redirect based on role */
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <RoleBasedRedirect />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default routes;
