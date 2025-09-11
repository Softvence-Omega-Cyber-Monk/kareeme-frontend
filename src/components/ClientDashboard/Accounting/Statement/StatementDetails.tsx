
import { FiDownload } from "react-icons/fi";

const StatementDetails = () => {
  return (
    <div className="space-y-9">
      <div>
        {/* Responsive Container */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Title & Icon */}
          <div className="space-y-2">
            <h1 className="text-base font-sans">Accounting </h1>
            <div className="flex justify-start items-center gap-2">
              <h1 className="text-2xl font-sans">Statement Details</h1>
            </div>
          </div>

          {/* Download Report  */}
          <button className="bg-[#17171A] text-white py-2 px-4 text-xl rounded-lg shadow-2xl h-12 flex items-center justify-center gap-2 hover:bg-black focus:outline-none transition-colors cursor-pointer">
            <FiDownload className="w-6 h-6" />
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatementDetails;
