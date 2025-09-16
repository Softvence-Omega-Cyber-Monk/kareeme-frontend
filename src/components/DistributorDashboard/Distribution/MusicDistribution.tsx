// MusicDistribution.tsx
import React from "react";
import {
  FaYoutube,
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaDeezer,
} from "react-icons/fa";
import { SiAudiomack, SiTidal, SiIheartradio } from "react-icons/si";
import { Card } from "@/components/ui/card";

import Youtube from "@/assets/icons/youtube.png";
import sportify from "@/assets/icons/sportity.png";
import apple from "@/assets/icons/apple.png";
import soundClud from "@/assets/icons/soundCloud.png";
import audio from "@/assets/icons/audio.png";
import deser from "@/assets/icons/deezer.png";
import tidal from "@/assets/icons/tidal.png";
import heart from "@/assets/icons/heart2.png";

type PlatformStatus = {
  name: string;
  icon: React.ReactNode;
  status?: "distributed" | "failed" | "pending";
  date?: string;
  streams?: string;
  metadataIssue?: boolean;
};

type MusicRelease = {
  title: string;
  artist: string;
  releaseDate: string;
  tracks: number;
  status: "Pending" | "Distributed" | "Failed";
  platforms: PlatformStatus[];
};

const releases: MusicRelease[] = [
  {
    title: "Midnight Dreams",
    artist: "John Doe",
    releaseDate: "26/08/2025",
    tracks: 12,
    status: "Pending",
    platforms: [
      { name: "YouTube", icon: <FaYoutube />, streams: "2.3M" },
      { name: "Spotify", icon: <FaSpotify />, streams: "1.8M" },
      { name: "Apple Music", icon: <FaApple />, streams: "1.6M" },
      { name: "SoundCloud", icon: <FaSoundcloud />, streams: "1.3M" },
      { name: "Audiomack", icon: <SiAudiomack />, streams: "900K" },
      { name: "Deezer", icon: <FaDeezer />, streams: "850K" },
      { name: "TIDAL", icon: <SiTidal />, streams: "500K" },
      { name: "iHeartRadio", icon: <SiIheartradio />, streams: "200K" },
    ],
  },
//   {
//     title: "Summer Vibes EP",
//     artist: "Sarah Johnson",
//     releaseDate: "26/08/2025",
//     tracks: 12,
//     status: "Distributed",
//     platforms: [
//       {
//         name: "YouTube",
//         icon: <FaYoutube />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Spotify",
//         icon: <FaSpotify />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "SoundCloud",
//         icon: <FaSoundcloud />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Apple Music",
//         icon: <FaApple />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Audiomack",
//         icon: <SiAudiomack />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Deezer",
//         icon: <FaDeezer />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "TIDAL",
//         icon: <SiTidal />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "iHeartRadio",
//         icon: <SiIheartradio />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//     ],
//   },
//   {
//     title: "Electric Nights",
//     artist: "Mike Rodriguez",
//     releaseDate: "26/08/2025",
//     tracks: 12,
//     status: "Failed",
//     platforms: [
//       {
//         name: "YouTube",
//         icon: <FaYoutube />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Spotify",
//         icon: <FaSpotify />,
//         status: "failed",
//         metadataIssue: true,
//       },
//       {
//         name: "SoundCloud",
//         icon: <FaSoundcloud />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Apple Music",
//         icon: <FaApple />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Audiomack",
//         icon: <SiAudiomack />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "Deezer",
//         icon: <FaDeezer />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "TIDAL",
//         icon: <SiTidal />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//       {
//         name: "iHeartRadio",
//         icon: <SiIheartradio />,
//         status: "distributed",
//         date: "26/08/2025",
//       },
//     ],
//   },
];

interface PlatformItem {
  name: string;
  streams: string;
  icon: string;
  iconColor: string;
}

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

const MusicDistribution: React.FC = () => {
  return (
    <div className="p-6 text-white space-y-6">
      {releases.map((release, idx) => (
        <div
          key={idx}
          className="bg-[#0C1F21] border border-gray-700 rounded-xl p-6 shadow-lg space-y-4 hover:shadow-2xl transition"
        >
          {/* Platforms */}
          <Card className="border-none">
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {platformPerformance.map((platform, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                      style={{ backgroundColor: platform.iconColor }}
                    >
                      <img src={platform.icon} alt={platform.name} />
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

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-4">
            {release.status === "Pending" && (
              <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                Distribute Now
              </button>
            )}
            {release.status === "Distributed" && (
              <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                View Analytics
              </button>
            )}
            {release.status === "Failed" && (
              <>
                <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
                  Fix Error
                </button>
                <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                  View Analytics
                </button>
              </>
            )}
            <button className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition">
              View Details
            </button>
          </div>
        </div>
      ))}
      <div className="text-blue-500 hover:underline cursor-pointer text-center font-medium">
        Load More →
      </div>
    </div>
  );
};

export default MusicDistribution;
