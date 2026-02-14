import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";

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
import DistributorBackCatalog from "@/pages/Distributor/DistributorBackCatalog";
import TIDALPage from "@/pages/Client/TIDALPage";
import AudiomackPage from "@/pages/Client/AudiomackPage";
import DeezerPage from "@/pages/Client/DeezerPage";
import AdminStatementPage from "@/pages/Admin/AdminStatementPage";
import AdminProfitLossPage from "@/pages/Admin/AdminProfitLossPage";
import DataEntryForm from "@/components/ClientDashboard/Catalog/BackCatalog/DataEntryForm";
import CatalogDetailsData from "@/components/ClientDashboard/Catalog/BackCatalog/CatalogDetailsData";
import AdminRealisePage from "@/pages/Admin/AdminRealisePage";
import AdminBackCatalogPage from "@/pages/Admin/AdminBackCatalogPage";
import AdminSubmitPage from "@/pages/Admin/AdminSubmitPage";
import AdminTeamPage from "@/pages/Admin/AdminTeamPage";
import SubmitDetails from "@/components/AdminDashboard/AdminCatalog/Submit/SubmitDetails";
import ClientsManagementPage from "@/pages/Distributor/ClientsManagementPage";
import CreateNewClient from "@/components/DistributorDashboard/Client/CreateNewClient";
import SubmissionDetails from "@/components/DistributorDashboard/DistributorSubmision/SubmissionDetails";
import DistributionPage from "@/pages/Distributor/DistributionPage";
import DistributationDetails from "@/components/DistributorDashboard/Distribution/DistributationDetails";
import ConfirmDistribution from "@/components/DistributorDashboard/Distribution/ConfirmDistribution";
import PaymentsEarningsPage from "@/pages/Accountant/PaymentsEarningsPage";
import ProfitLossPages from "@/pages/Accountant/ProfitLossPages";
import StatementsPage from "@/pages/Accountant/StatementsPage";
import ClientManagementPage from "@/pages/Accountant/ClientManagementPage";
import IHeartRadioPage from "@/pages/Client/IHeartRadioPage";
import AccountanSettingsPage from "@/pages/Accountant/AccountanSettingsPage";
import DistributorSettingPage from "@/pages/Distributor/DistributorSettingPage";
import SplitSheetDetail from "@/components/ClientDashboard/Catalog/SplitSheets/SplitSheetDetail";
import EditorialSupportPage from "@/pages/Client/EditorialSupportPage";
import EditorialStapeComponent from "@/components/ClientDashboard/EditorialSupport/EditorialStapeComponent";
import EditorialPitchForm from "@/components/ClientDashboard/EditorialSupport/EditorialPitchForm";
import LabelBridge from "@/components/LabelBridge/LabelBridge";
import NewsArticlesPage from "@/pages/Home/NewsArticlesPage";
import AboutPage from "@/pages/Home/AboutPage";
import Shop from "@/components/Home/Shop/Shop";
import ProductDetailPage from "@/components/Home/Shop/ProductDetailPage";
import PrivacyPolicy from "@/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "@/PrivacyPolicy/TermsConditions";
import Home from "@/components/Home/Home";
import Unauthorized from "@/pages/Unauthorized";
import ClientAdminLayout from "@/Layout/ClientAdminLayout";
import ClientAdminDashboard from "@/pages/ClientAdmin/ClientAdminDashboard";

import PrivateRoute from "./PrivateRoute";
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
        path: "/labelbridge",
        element: <LabelBridge />,
      },

      {
        path: "/news-articles",
        element: <NewsArticlesPage />,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsConditions></TermsConditions>,
      },
      {
        path: "/cart",
        element: <ProductDetailPage></ProductDetailPage>,
      },

      {
        path: "/details/:id",
        element: <ProductDetailPage></ProductDetailPage>,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },

  /* Client Dashboard */
  {
    path: "/client-dashboard",
    element: (
      <PrivateRoute allowedRoles={["CLIENT"]}>
        <ClientLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <ClientDashboardPage /> },
      { path: "dashboard", element: <ClientDashboardPage /> },
      { path: "analytics", element: <ClientAnalyticsPage /> },
      /* Analytics*/
      { path: "analytics/YouTube", element: <AnalyticsYoutubePage /> },
      { path: "analytics/Spotify", element: <SpotifyPage /> },
      { path: "analytics/AppleMusic", element: <AppleMusicPage /> },
      { path: "analytics/SoundCloud", element: <SoundCloudPage /> },
      { path: "analytics/Audiomack", element: <AudiomackPage /> },
      { path: "analytics/Deezer", element: <DeezerPage /> },
      { path: "analytics/TIDAL", element: <TIDALPage /> },
      { path: "analytics/iHeartRadio", element: <IHeartRadioPage /> },
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
      { path: "catalog/back-catalog/add", element: <DataEntryForm /> },
      { path: "catalog/back-catalog/edit/:id", element: <DataEntryForm /> },
      { path: "catalog/back-catalog/view/:id", element: <CatalogDetailsData /> },
      { path: "catalog/split-sheets", element: <SplitSheetsPage /> },
      { path: "split-sheet/:title", element: <SplitSheetDetail /> },

      /* Editorial Support */
      { path: "catalog/editorial-submit", element: <EditorialSupportPage /> },
      { path: "editorial-submit/:title", element: <EditorialPitchForm /> },
      /*  */

      {
        path: "catalog/editorial-submit/form",
        element: <EditorialStapeComponent />,
      },

      /* profile */
      { path: "catalog/settings", element: <SettingsPage /> },
    ],
  },

  /* Distributor Dashboard */
  {
    path: "/distributor-dashboard",
    element: (
      <PrivateRoute allowedRoles={["DISTRIBUTOR"]}>
        <DistributorLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <DistributorDashboardPage /> },
      { path: "dashboard", element: <DistributorDashboardPage /> },
      { path: "submissions", element: <DistributorSubmissions /> },
      { path: "submissions/:id", element: <SubmissionDetails /> },
      { path: "back-catalog", element: <DistributorBackCatalog /> },
      /*  */
      { path: "distribution", element: <DistributionPage /> },
      { path: "distribution/details", element: <DistributationDetails /> },
      {
        path: "distribution/confirm-distribution",
        element: <ConfirmDistribution />,
      },

      { path: "client", element: <ClientsManagementPage /> },
      { path: "client/create", element: <CreateNewClient /> },

      { path: "settings", element: <DistributorSettingPage /> },
    ],
  },

  /* Accountant Dashboard */
  {
    path: "/accountant-dashboard",
    element: (
      <PrivateRoute allowedRoles={["ACCOUNTANT"]}>
        <AccountantLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <AccountantDashboardPage /> },
      { path: "dashboard", element: <AccountantDashboardPage /> },
      { path: "payments-earnings", element: <PaymentsEarningsPage /> },
      { path: "statements", element: <StatementsPage /> },
      { path: "profit-loss", element: <ProfitLossPages /> },
      { path: "client-manage", element: <ClientManagementPage /> },
      { path: "settings", element: <AccountanSettingsPage /> },
    ],
  },

  /* Super Admin Dashboard */
  {
    path: "/super-admin-dashboard",
    element: (
      <PrivateRoute allowedRoles={["SUPER_ADMIN"]}>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
      { path: "statement", element: <AdminStatementPage /> },
      { path: "profit-loss", element: <AdminProfitLossPage /> },
      /* Catalog */
      { path: "releases", element: <AdminRealisePage /> },
      { path: "back-catalog", element: <AdminBackCatalogPage /> },
      { path: "submit", element: <AdminSubmitPage /> },
      { path: "submit/view", element: <SubmitDetails /> },
      /* team */
      { path: "team", element: <AdminTeamPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute allowedRoles={["ADMIN"]}>
        <ClientAdminLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <ClientAdminDashboard /> },
      { path: "dashboard", element: <ClientAdminDashboard /> },
      { path: "analytics", element: <ClientAnalyticsPage /> },
      /* Analytics*/
      { path: "analytics/youtube", element: <AnalyticsYoutubePage /> },
      { path: "analytics/spotify", element: <SpotifyPage /> },
      { path: "analytics/apple-music", element: <AppleMusicPage /> },
      { path: "analytics/sound-cloud", element: <SoundCloudPage /> },
      { path: "analytics/audiomack", element: <AudiomackPage /> },
      { path: "analytics/deezer", element: <DeezerPage /> },
      { path: "analytics/tidal", element: <TIDALPage /> },
      { path: "analytics/iheart-radio", element: <IHeartRadioPage /> },
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
      { path: "catalog/back-catalog/edit", element: <DataEntryForm /> },
      { path: "catalog/back-catalog/view/:id", element: <CatalogDetailsData /> },
      { path: "catalog/split-sheets", element: <SplitSheetsPage /> },
      { path: "split-sheet/:title", element: <SplitSheetDetail /> },

      /* Editorial Support */
      { path: "catalog/editorial-submit", element: <EditorialSupportPage /> },
      { path: "editorial-submit/:title", element: <EditorialPitchForm /> },
      /*  */

      {
        path: "catalog/editorial-submit/form",
        element: <EditorialStapeComponent />,
      },

      /* profile */
      { path: "settings", element: <SettingsPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
