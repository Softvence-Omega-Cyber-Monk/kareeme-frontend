import Dashboard from "@/components/ClientDashboard/Dashboard/Dashboard";
import SpotifySection from "@/components/ClientDashboard/Dashboard/SpotifySection";

const ClientDashboardPage = () => {
  return (
    <div className="space-y-6">
      <Dashboard />
      <SpotifySection />
    </div>
  );
};

export default ClientDashboardPage;
