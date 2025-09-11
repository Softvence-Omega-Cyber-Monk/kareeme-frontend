import { Card } from "@/components/ui/card";

import Youtube from "../../assets/icons/youtube.png";
import sportify from "../../assets/icons/sportity.png";
import apple from "../../assets/icons/apple.png";
import soundClud from "../../assets/icons/soundCloud.png";
import audio from "../../assets/icons/audio.png";
import deser from "../../assets/icons/deezer.png";
import tidal from "../../assets/icons/tidal.png";
import heart from "../../assets/icons/heart2.png";

interface ActivityItem {
  title: string;
  subtitle: string;
  timestamp: string;
}

interface StatusItem {
  label: string;
  percentage: number;
  color: string;
}

interface PlatformItem {
  name: string;
  streams: string;
  icon: string;
  iconColor: string;
}

const recentActivities: ActivityItem[] = [
  {
    title: "New EP from Jane Doe",
    subtitle: "Submission: Pending Review",
    timestamp: "10 minutes ago",
  },
  {
    title: 'Distribute "Summer Vibes"',
    subtitle: "Release: Sent to Platforms",
    timestamp: "1 hour ago",
  },
  {
    title: "New Client: Music Innovations Inc.",
    subtitle: "Client: Profile Created",
    timestamp: "3 hours ago",
  },
  {
    title: "Single by The Rhythmatics",
    subtitle: "Submission: Pending Review",
    timestamp: "Yesterday at 4:30 PM",
  },
  {
    title: 'Distribute "City Lights"',
    subtitle: "Release: Sent to Platforms",
    timestamp: "Yesterday at 2:15 PM",
  },
];

const distributionStatus: StatusItem[] = [
  {
    label: "Completed",
    percentage: 78,
    color: "bg-green-500",
  },
  {
    label: "In progress",
    percentage: 15,
    color: "bg-blue-500",
  },
  {
    label: "Failed",
    percentage: 7,
    color: "bg-red-500",
  },
];

const platformPerformance: PlatformItem[] = [
  {
    name: "YouTube",
    streams: "2.3M Streams",
    icon: Youtube,
    iconColor: "#F2F2F21A",
  },
  {
    name: "Spotify",
    streams: "1.8M Streams",
    icon: sportify,
    iconColor: "#F2F2F21A",
  },
  {
    name: "Apple Music",
    streams: "1.6M Streams",
    icon: apple,
    iconColor: "#F2F2F21A",
  },
  {
    name: "SoundCloud",
    streams: "1.3M Streams",
    icon: soundClud,
    iconColor: "#F2F2F21A",
  },
  {
    name: "Audiomack",
    streams: "900K Streams",
    icon: audio,
    iconColor: "#F2F2F21A",
  },
  {
    name: "Deezer",
    streams: "830K Streams",
    icon: deser,
    iconColor: "#F2F2F21A",
  },
  {
    name: "TIDAL",
    streams: "500K Streams",
    icon: tidal,
    iconColor: "#F2F2F21A",
  },
  {
    name: "iHeartRadio",
    streams: "200K Streams",
    icon: heart,
    iconColor: "#F2F2F21A",
  },
];

export function DistributorRecentActivity() {
  return (
    <div className="">
      {/* Recent Activity + Distribution Status */}
      <div className="mt-[40px] w-full flex flex-col lg:flex-row gap-8">
        {/* Recent Activity Section */}
        <Card className="flex-1 border border-[#c6c6c630]">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm leading-relaxed">
                      {activity.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">
                      {activity.subtitle}
                    </p>
                  </div>
                  <div className="text-slate-400 text-xs sm:text-sm ml-4 flex-shrink-0">
                    {activity.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Distribution Status Section */}
        <Card className="w-full lg:w-[370px] border border-[#c6c6c630]">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              Distribution Status
            </h2>
            <div className="space-y-6">
              {distributionStatus.map((status, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${status.color}`}
                      ></div>
                      <span className="text-white text-sm font-medium">
                        {status.label}
                      </span>
                    </div>
                    <span className="text-slate-400 text-sm">
                      {status.percentage}%
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${status.color}`}
                        style={{ width: `${status.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Platform Performance Section */}
      <div className="mt-[40px]">
        <Card className="border border-[#c6c6c630]">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">
              Platform Performance
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {platformPerformance.map((platform, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 ${platform.iconColor} rounded-full flex items-center justify-center mx-auto mb-3`}
                  >
                  <img src={platform.icon} alt="" />
                  </div>
                  <h3 className="text-white font-medium text-sm mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-slate-400 text-xs">{platform.streams}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
