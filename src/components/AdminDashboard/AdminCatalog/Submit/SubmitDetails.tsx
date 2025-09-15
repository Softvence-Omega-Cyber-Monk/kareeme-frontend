import catalogphoto1 from "@/assets/photo/catalogphoto1.png";
import audioframe from "@/assets/photo/audioframe.png";
import MiniTitle from "@/components/ClientDashboard/Shared/MiniTitle";

const SubmitDetails = () => {
  return (
    <div>
      <div className=" w-full text-white   mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={catalogphoto1}
            alt="Album Artwork"
            className="w-32 h-32 rounded-lg"
          />

          <div>
            <div>
              <h2 className="text-2xl font-bold">
                The World is Yours (feat. LeeLee Babii)
              </h2>
              <p className="text-gray-400">Gemini Chachi</p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="px-6 py-2 bg-green-600 rounded-md text-white hover:bg-green-700"
              >
                Export Data
              </a>
              <button className="px-6 py-2 bg-gray-600 rounded-md text-white hover:bg-gray-700 cursor-pointer">
                Edit Metadata
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* PArt-2 */}
      <div className="space-y-6">
        <MiniTitle title="General Release Information" />
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
              <div className=" gap-2  cursor-pointer">
                {/* <p>
                  <FaRegCirclePlay className="h-6 w-6 text-blue-700" />
                </p>
                <p className="font-medium">Audio File</p> */}
                <img src={audioframe} alt="" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start gap-2">
                <p className="text-[#E5E5E5]">Display Artist: </p>
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
      </div>
    </div>
  );
};

export default SubmitDetails;
