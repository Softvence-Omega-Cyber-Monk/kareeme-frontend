import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCircleNotifications } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";


import ProfileInformation from "./ProfileInformation";

import PasswordManagement from "./PasswordManagement";
import { Notification } from "./Notification";
import { SecuritySettings } from "./SecuritySettings";
import { LanguageRegionPreferences } from "./LanguageRegionPreferences";
import { DistributionPreferences } from "./DistributionPreferences";
import { Support } from "./Support";

const DistributorSetting = () => {
  const [activeSection, setActiveSection] = useState("profile"); // Default section is 'Profile Information'

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="= text-white p-6 ">
      <div className="max-w-8xl mx-auto flex">
        <div className="w-1/4 space-y-4 border border-[#38383A] rounded-lg shadow-md bg-[#17171A] p-3 ">
          <button
            className={`w-full text-xl py-3 rounded-xl cursor-pointer ${
              activeSection === "profile"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A] "
                : "bg-[#1E1E21]"
            } hover:bg-gray-400 `}
            onClick={() => handleButtonClick("profile")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <FaRegUserCircle />
              Profile Information
            </span>
          </button>
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "password"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("password")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <SiSpringsecurity />
              Password Management
            </span>
          </button>
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "notifications"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("notifications")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <MdCircleNotifications className="text-white" />
              Notification Settings
            </span>
          </button>
          {/*  */}
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "security"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("security")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <MdCircleNotifications className="text-white" />
              Security Settings
            </span>
          </button>
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "language"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("language")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <MdCircleNotifications className="text-white" />
              Language & Region 
            </span>
          </button>
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "distribution"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("distribution")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <MdCircleNotifications className="text-white" />
              Distribution Preferences
            </span>
          </button>
          <button
            className={`w-full text-xl py-3 rounded-xl  cursor-pointer ${
              activeSection === "support"
                ? "bg-[#1E1E21] text-[#3A5CFF] border border-[#3A3A3A]"
                : "bg-[#1E1E21]"
            } hover:bg-gray-400`}
            onClick={() => handleButtonClick("support")}
          >
            <span className="flex items-center gap-2 justify-start pl-4">
              <MdCircleNotifications className="text-white" />
              Support
            </span>
          </button>
        </div>
        <div className="w-3/4 pl-8">
          {activeSection === "profile" && (
            <div>
              <ProfileInformation />
            </div>
          )}

          {activeSection === "password" && (
            <div>
             <PasswordManagement></PasswordManagement>
            </div>
          )}

          {activeSection === "notifications" && (
            <div>
              <Notification />
            </div>
          )}
          {activeSection === "security" && (
            <div>
              < SecuritySettings/>
            </div>
          )}
          {activeSection === "language" && (
            <div>
              <LanguageRegionPreferences />
            </div>
          )}
          {activeSection === "distribution" && (
            <div>
              <DistributionPreferences />
            </div>
          )}
          {activeSection === "support" && (
            <div>
              <Support />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistributorSetting;
