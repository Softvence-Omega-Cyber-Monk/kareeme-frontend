import user from "@/assets/photo/user.svg";

interface ArtistCardProps {
  name: string;
  genre: string;
  totalRelease: number;
  releaseType: string;
  distributor: string;
  label: string;
  totalTracks: number;
  dateRange: string;
}

const BackCatalogCard = ({
  name,
  genre,
  totalRelease,
  releaseType,
  distributor,
  label,
  totalTracks,
  dateRange,
}: ArtistCardProps) => (
  <div className="bg-[#0D1F22] p-5 rounded-lg shadow-md text-white border-t-2 border-r border-l border-[#303B40]">
    <div className="flex items-center gap-4">
      <img src={user} alt="" />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm italic">{genre}</p>
      </div>
    </div>
    <div className="mt-4 space-y-3">
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]"> Total Release:</p>
        <p className="text-base"> {totalRelease}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]"> Release Type:</p>
        <p className="text-base"> {releaseType}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]">Distributor:</p>
        <p className="text-base"> {distributor}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]">Label: </p>
        <p className="text-base">{label}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]">Total Track: </p>
        <p className="text-base">{totalTracks}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-base text-[#BDBDBD]">Date Range:</p>
        <p className="text-base">{dateRange}</p>
      </div>
    </div>
    <button className="w-full mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition cursor-pointer">
      View Details
    </button>
  </div>
);

export default BackCatalogCard;
