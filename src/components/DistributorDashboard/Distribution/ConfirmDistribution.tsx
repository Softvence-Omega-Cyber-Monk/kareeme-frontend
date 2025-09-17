import catalogphoto1 from "@/assets/photo/catalogphoto1.png";
import audioframe1 from "@/assets/photo/audioframe1.svg";
import audioframe2 from "@/assets/photo/audioframe2.svg";
import tenancy from "@/assets/icons/tenancy.svg";
import PlatformPerformance from "../Dashboard/PlatformPerformance";
import { FaCircleExclamation } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const ConfirmDistribution = () => {
  return (
    <div>
      <div className=" w-full text-white   mx-auto">
        <p className="text-2xl font-sans  gap-1">Confirm Distribution</p>

        <div className=" w-full text-white   mx-auto mt-6">
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={catalogphoto1}
                alt="Album Artwork"
                className="w-[86px] h-[65px] rounded-lg"
              />
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">Electric Nights</h2>
                <p className="text-gray-400">Gemini Chachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PArt-2 */}
      <div className="space-y-6">
        <div className="gap-8 p-8 rounded-2xl bg-[#0B1D21] space-y-3 border border-[#2F3B40]">
          <h2 className="text-2xl">General Release Information</h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Label Name:</p>
                <p className="font-medium">OnelsOneEnt</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Catalogue Number: </p>
                <p className="font-medium">ONELS-OOI</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Type: </p>
                <p className="font-medium">Single</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Date: </p>
                <p className="font-medium">20/11/2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Distributor: </p>
                <p className="font-medium">Distrokid</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Artist: </p>
                <p className="font-medium">Gemini Chachi</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Artwork Link: </p>
                <p className="font-medium underline text-blue-600">
                  View Artwork
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">UPC: </p>
                <p className="font-medium">797587574636</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Title: </p>
                <p className="font-medium">
                  The World is Yours (feat. LeeLee Babii
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release C Link: </p>
                <p className="font-medium">(c) 2024 OnelsOneEnt</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release P Link: </p>
                <p className="font-medium">(P) 2024 OnelsOneEnt</p>
              </div>
            </div>
          </div>
        </div>
        {/* part-2 */}
        <div className="gap-8 p-8 rounded-2xl bg-[#0B1D21] space-y-3 border border-[#2F3B40]">
          <h2 className="text-2xl">Track Details</h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">ISRC: </p>
                <p className="font-medium">US-SIZ-23-00001</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Copyright Holder: </p>
                <p className="font-medium">OnelsOneEnt</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Language: </p>
                <p className="font-medium">English</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">TikTok Start Time: </p>
                <p className="font-medium">0:15</p>
              </div>
              <div className=" flex gap-2  cursor-pointer">
                {/* <p>
                  <FaRegCirclePlay className="h-6 w-6 text-blue-700" />
                </p>
                <p className="font-medium">Audio File</p> */}
                <img src={audioframe1} alt="" />
                <img src={audioframe2} alt="" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Artist: </p>
                <p className="font-medium"> emini Chachi, LeeLee Babii </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Publishe: </p>
                <p className="font-medium"> OnelsOne Publishing</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Explicit: </p>
                <p className="font-medium underline text-blue-600">Yes</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Territory: </p>
                <p className="font-medium">None</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Mix/Version: </p>
                <p className="font-medium">BabiiOriginal Mix</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Genre: </p>
                <p className="font-medium">Pop/ R&B</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Original Release </p>
                <p className="font-medium"> Date: 20/11/2024</p>
              </div>
            </div>
          </div>
        </div>
        {/* part-3 */}
        <div className="gap-8 p-8 rounded-2xl bg-[#0B1D21] space-y-3 border border-[#2F3B40]">
          <h2 className="text-2xl">Artist Metadata </h2>{" "}
          <h2 className="text-lg mt-2">Artist: Gemini Chachi </h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Label Name:</p>
                <p className="font-medium">OnelsOneEnt</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Catalogue Number: </p>
                <p className="font-medium">ONELS-OOI</p>
              </div>

              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Spotify ID: </p>
                <p className="font-medium text-blue-600">
                  spotify:artist:someid
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Distributor: </p>
                <p className="font-medium">Distrokid</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Artist: </p>
                <p className="font-medium">Gemini Chachi</p>
              </div>

              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Spotify ID: </p>
                <p className="font-medium text-blue-600">
                  spotify:artist:someid
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Title: </p>
                <p className="font-medium">The World is Yours</p>
              </div>

              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release P Link: </p>
                <p className="font-medium">(P) 2024 OnelsOneEnt</p>
              </div>
            </div>
          </div>
          <hr className="text-[#044A20]" />
          <h2 className="text-lg">Artist: LeeLee Babii</h2>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Label Name:</p>
                <p className="font-medium">OnelsOneEnt</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Catalogue Number: </p>
                <p className="font-medium">ONELS-OOI</p>
              </div>

              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Spotify ID: </p>
                <p className="font-medium text-blue-600">
                  spotify:artist:someid
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Distributor: </p>
                <p className="font-medium">Distrokid</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Artist: </p>
                <p className="font-medium">Gemini Chachi</p>
              </div>

              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Spotify ID: </p>
                <p className="font-medium text-blue-600">
                  spotify:artist:someid
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release Title: </p>
                <p className="font-medium">The World is Yours</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Release C Link: </p>
                <p className="font-medium">(c) 2024 OnelsOneEnt</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PlatformPerformance />
        </div>
        <div className=" w-2/3 flex justify-start gap-2 p-5 rounded-2xl shadow-2xl bg-[#0F2435]">
          <span>
            <FaCircleExclamation />
          </span>
          <p>
            Once you confirm, the release will be sent to all selected
            platforms. Make sure all metadata is correct. Distribution typically
            takes 24-48 hours to complete.
          </p>
        </div>
        <div className="flex justify-end gap-3">
          {/* Cancel Button */}
          <button className="bg-gray-300 text-black px-5 py-2 rounded-lg hover:bg-gray-400 transition cursor-pointer flex justify-center items-center gap-2">
            <RxCross2 />
            Cancel
          </button>

          {/* Distribution Button */}
          <button className="bg-[#3A5CFF] text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer flex justify-center items-center gap-2">
            <img src={tenancy} alt="" className="h-5 w-5" />
            Distribution
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDistribution;
