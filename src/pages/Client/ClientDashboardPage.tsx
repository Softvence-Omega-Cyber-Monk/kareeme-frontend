import AppleMusicSection from "@/components/ClientDashboard/Dashboard/AppleMusicSection";
import AudiomackSection from "@/components/ClientDashboard/Dashboard/AudiomackSection";
import Dashboard from "@/components/ClientDashboard/Dashboard/Dashboard";
import DeezerSection from "@/components/ClientDashboard/Dashboard/DeezerSection";
import IHeartRadioSection from "@/components/ClientDashboard/Dashboard/IHeartRadioSection";
import SoundCloudSection from "@/components/ClientDashboard/Dashboard/SoundCloudSection";
import SpotifySection from "@/components/ClientDashboard/Dashboard/SpotifySection";
import TIDALSection from "@/components/ClientDashboard/Dashboard/TIDALSection";

const ClientDashboardPage = () => {
  return (
    <div className="space-y-6">
      <Dashboard />
      <SpotifySection />
      <AppleMusicSection />
      <SoundCloudSection />
      <AudiomackSection />
      <DeezerSection />
      <TIDALSection />
      <IHeartRadioSection />
    </div>
  );
};

export default ClientDashboardPage;
