import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
// import AdminRoute from "./AdminRoutes";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";

import AdminDashboardPage from "@/pages/Admin/AdminDashboardPage";
import AdminLayout from "@/Layout/AdminLayout";
import ClientLayout from "@/Layout/ClientLayout";
import ClientDashboardPage from "@/pages/Client/ClientDashboardPage";
import ClientAnalyticsPage from "@/pages/Client/ClientAnalyticsPage";
import AnalyticsYoutubePage from "@/pages/Client/AnalyticsYoutubePage";
import StatementPage from "@/pages/Client/StatementPage";
import ProfitLossPage from "@/pages/Client/ProfitLossPage";
import ReleasesPage from "@/pages/Client/ReleasesPage";
import SubmitPage from "@/pages/Client/SubmitPage";
import BackCatalogPage from "@/pages/Client/BackCatalogPage";
import ReleasesDetails from "@/components/ClientDashboard/Catalog/Releases/ReleasesDetails";
import SettingsPage from "@/pages/Client/SettingsPage";
import SplitSheetsPage from "@/pages/Client/SplitSheetsPage";
import SpotifyPage from "@/pages/Client/SpotifyPage";
import AppleMusicPage from "@/pages/Client/AppleMusicPage";
import SoundCloudPage from "@/pages/Client/SoundCloudPage";
import StapeComponent from "@/components/ClientDashboard/Catalog/Submit/StapeComponent";
import DistributorLayout from "@/Layout/DistributorLayout";
import DistributorDashboardPage from "@/pages/Distributor/DistributorDashboardPage";
import AccountantLayout from "@/Layout/AccountantLayout";
import AccountantDashboardPage from "@/pages/Accountant/AccountantDashboardPage";
import DistributorSubmissions from "@/pages/Distributor/DistributorSubmissions";
import StatementDetailsPage from "@/pages/Client/StatementDetailsPage";

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

  /* Client Dashboard */
  {
    path: "/client-dashboard",
    element: <ClientLayout />,
    children: [
      { index: true, element: <ClientDashboardPage /> },
      { path: "dashboard", element: <ClientDashboardPage /> },
      { path: "analytics", element: <ClientAnalyticsPage /> },
      /* Analytics*/
      { path: "analytics/youtube", element: <AnalyticsYoutubePage /> },
      { path: "analytics/spotify", element: <SpotifyPage /> },
      { path: "analytics/apple-music", element: <AppleMusicPage /> },
      { path: "analytics/soundcloud", element: <SoundCloudPage /> },
      /* Accounting */
      { path: "accounting/statement", element: <StatementPage /> },
      { path: "accounting/statement/:id", element: <StatementDetailsPage /> },
      { path: "accounting/profit-loss", element: <ProfitLossPage /> },
      /*  Catalog*/
      { path: "catalog/releases", element: <ReleasesPage /> },
      { path: "catalog/releases/:id", element: <ReleasesDetails /> },
      { path: "catalog/submit", element: <SubmitPage /> },
      { path: "catalog/submit/form", element: <StapeComponent /> },

      { path: "catalog/back-catalog", element: <BackCatalogPage /> },
      { path: "catalog/split-sheets", element: <SplitSheetsPage /> },
      /* profile */
      { path: "catalog/settings", element: <SettingsPage /> },
    ],
  },

  /* Diostributor Dashboard */
  {
    path: "/diostributor-dashboard",
    element: <DistributorLayout />,
    children: [
      { index: true, element: <DistributorDashboardPage /> },
      { path: "dashboard", element: <DistributorDashboardPage /> },
      { path: "submissions", element: <DistributorSubmissions /> },
      { path: "analytics", element: <ClientAnalyticsPage /> },
    ],
  },

  /* Accountant Dashboard */
  {
    path: "/accountant-dashboard",
    element: <AccountantLayout />,
    children: [
      { index: true, element: <AccountantDashboardPage /> },
      { path: "dashboard", element: <AccountantDashboardPage /> },
    ],
  },

  /* Admin Dashboard */
  {
    path: "/admin-dashboard",
    element: (
      // <AdminRoute>
      <AdminLayout />
      // </AdminRoute>
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
