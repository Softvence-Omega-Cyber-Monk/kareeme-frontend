// MusicDistribution.tsx
import React, { useState } from "react";
import { Card } from "@/components/ui/card";

import Youtube from "@/assets/icons/youtube.png";
import sportify from "@/assets/icons/sportity.png";
import apple from "@/assets/icons/apple.png";
import soundClud from "@/assets/icons/soundCloud.png";
import audio from "@/assets/icons/audio.png";
import deser from "@/assets/icons/deezer.png";
import tidal from "@/assets/icons/tidal.png";
import heart from "@/assets/icons/heart2.png";
import { Checkbox } from "@/components/ui/checkbox";
import { FaCalendarAlt, FaCheck, FaUser } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { Link } from "react-router-dom";
import ConfirmDistribution from "./ConfirmDistribution";

const MusicDistribution: React.FC = () => {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div>
      <div className=" text-white space-y-6">
        {/* Release Card */}
        <div className="bg-[#0C1F21] border border-gray-700 rounded-xl p-6 shadow-lg space-y-4 hover:shadow-2xl transition">
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-2">
              <div className="flex items-center gap-3 cursor-pointer">
                <Checkbox id="terms" />
              </div>
              <h2 className="text-2xl font-sans">Midnight Dreams</h2>
            </div>
            <p className="text-[#FFA600] bg-[#272C1F] px-3 py-1 rounded-lg font-medium w-fit">
              Pending
            </p>
          </div>
          <div>
            {/* Platforms */}
            <div>
              <div className="space-y-3 ml-8">
                <div className="space-y-3">
                  <p className=" flex gap-1">
                    <FaUser className="text-[#01D449]" />
                    John Doe
                  </p>
                  <p className=" flex gap-1">
                    <FaCalendarAlt className="text-[#01D449]" />
                    Release Date: 26/08/2025
                  </p>
                  <p className=" flex gap-1">
                    <IoMdMusicalNote className="text-[#01D449]" />
                    12 Tracks
                  </p>
                </div>
                <h2 className="text-base font-sans font-semibold">
                  Distribution Platforms:
                </h2>
              </div>

              <Card className="border-none">
                <div className="">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {/* YouTube */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={Youtube} alt="YouTube" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        YouTube
                      </h3>
                      <p className="text-slate-400 text-xs">2.3M Streams</p>
                    </div>

                    {/* Spotify */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={sportify} alt="Spotify" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        Spotify
                      </h3>
                      <p className="text-slate-400 text-xs">1.8M Streams</p>
                    </div>

                    {/* Apple Music */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={apple} alt="Apple Music" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        Apple Music
                      </h3>
                      <p className="text-slate-400 text-xs">1.6M Streams</p>
                    </div>

                    {/* SoundCloud */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={soundClud} alt="SoundCloud" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        SoundCloud
                      </h3>
                      <p className="text-slate-400 text-xs">1.3M Streams</p>
                    </div>

                    {/* Audiomack */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={audio} alt="Audiomack" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        Audiomack
                      </h3>
                      <p className="text-slate-400 text-xs">900K Streams</p>
                    </div>

                    {/* Deezer */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={deser} alt="Deezer" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        Deezer
                      </h3>
                      <p className="text-slate-400 text-xs">830K Streams</p>
                    </div>

                    {/* TIDAL */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={tidal} alt="TIDAL" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        TIDAL
                      </h3>
                      <p className="text-slate-400 text-xs">500K Streams</p>
                    </div>

                    {/* iHeartRadio */}
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ backgroundColor: "#F2F2F21A" }}
                      >
                        <img src={heart} alt="iHeartRadio" />
                      </div>
                      <h3 className="text-white font-medium text-sm mb-1">
                        iHeartRadio
                      </h3>
                      <p className="text-slate-400 text-xs">200K Streams</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
            <button className="w-full sm:w-auto bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              Distribute Now
            </button>
            <button
              onClick={() => setOpenDetails(true)}
              className="w-full sm:w-auto bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer"
            >
              View Details
            </button>
          </div>
        </div>
        {/*  Summer Vibes EP*/}
        <div className="bg-[#0C1F21] border border-gray-700 rounded-xl p-6 shadow-lg space-y-4 hover:shadow-2xl transition">
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-2">
              <div className="flex items-center gap-3 cursor-pointer">
                <Checkbox id="terms" />
              </div>
              <h2 className="text-2xl font-sans">Summer Vibes EP</h2>
            </div>
            <p className="text-[#01D449] bg-[#0E3026] px-3 py-1 rounded-lg font-medium w-fit">
              Distributed
            </p>
          </div>
          <div>
            {/* Platforms */}
            <div>
              <div className="space-y-3 ml-8">
                <div className="space-y-3">
                  <p className=" flex gap-1">
                    <FaUser className="text-[#01D449]" />
                    John Doe
                  </p>
                  <p className=" flex gap-1">
                    <FaCalendarAlt className="text-[#01D449]" />
                    Release Date: 26/08/2025
                  </p>
                  <p className=" flex gap-1">
                    <IoMdMusicalNote className="text-[#01D449]" />
                    12 Tracks
                  </p>
                </div>
                <h2 className="text-base font-sans font-semibold">
                  Distribution Status:
                </h2>
              </div>

              <Card className="border-none">
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* YouTube */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={Youtube}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>YouTube</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Audiomack */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={audio}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Audiomack</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Spotify */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={sportify}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Spotify</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* YouTube */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={deser}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Deezer</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* SoundCloud */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={soundClud}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>SoundCloud</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* TIDAL */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={tidal}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>TIDAL</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Apple Music */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={apple}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Apple Music</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* iHeartRadio */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={heart}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>iHeartRadio</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
            <Link to="/diostributor-dashboard/distribution/details">
              <button className="w-full sm:w-auto bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                View Analytics
              </button>
            </Link>

            <button className="w-full sm:w-auto bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">
              View Details
            </button>
          </div>
        </div>
        {/* Electric Nights*/}
        <div className="bg-[#0C1F21] border border-gray-700 rounded-xl p-6 shadow-lg space-y-4 hover:shadow-2xl transition">
          <div className="flex justify-between items-center">
            <div className="flex justify-start gap-2">
              <div className="flex items-center gap-3 cursor-pointer">
                <Checkbox id="terms" />
              </div>
              <h2 className="text-2xl font-sans">Electric Nights</h2>
            </div>
            <p className="text-[#D31301] bg-[#231D1F] px-3 py-1 rounded-lg font-medium w-fit">
              Failed
            </p>
          </div>
          <div>
            {/* Platforms */}
            <div>
              <div className="space-y-3 ml-8">
                <div className="space-y-3">
                  <p className=" flex gap-1">
                    <FaUser className="text-[#01D449]" />
                    John Doe
                  </p>
                  <p className=" flex gap-1">
                    <FaCalendarAlt className="text-[#01D449]" />
                    Release Date: 26/08/2025
                  </p>
                  <p className=" flex gap-1">
                    <IoMdMusicalNote className="text-[#01D449]" />
                    12 Tracks
                  </p>
                </div>
                <h2 className="text-base font-sans font-semibold">
                  Distribution Status:
                </h2>
              </div>

              <Card className="border-none">
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* YouTube */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={Youtube}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>YouTube</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Audiomack */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={audio}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Audiomack</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Spotify */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={sportify}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Spotify</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* YouTube */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={deser}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Deezer</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* SoundCloud */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={soundClud}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>SoundCloud</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* TIDAL */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={tidal}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>TIDAL</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* Apple Music */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={apple}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>Apple Music</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                    {/* iHeartRadio */}
                    <div className="flex justify-between items-center  rounded-xl p-2 bg-[#0C3326]">
                      <div className=" flex gap-2">
                        <img
                          src={heart}
                          alt=""
                          className="bg-[#232F22] rounded-full h-7 w-7"
                        />
                        <p>iHeartRadio</p>
                      </div>
                      <p className="flex justify-start items-center gap-1">
                        <span>
                          <FaCheck className="text-green-500" />
                        </span>
                        Distributed: 26/08/2025
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4">
            <button className="w-full sm:w-auto bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              View Analytics
            </button>
            <button className="w-full sm:w-auto bg-red-500 px-5 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">
              Fix Error
            </button>
            <button className="w-full sm:w-auto bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition cursor-pointer">
              View Details
            </button>
          </div>
        </div>
        {/* Load More */}
        <div className="text-blue-500 hover:underline cursor-pointer text-center font-medium">
          Load More →
        </div>
      </div>

      {/* ConfirmDistribution modal */}
      {openDetails && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] bg-opacity-50 flex justify-center items-start overflow-auto py-10">
          <div className="bg-[#0B1D21] rounded-2xl w-full max-w-6xl p-6 relative">
            <button
              onClick={() => setOpenDetails(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <ConfirmDistribution />
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicDistribution;
