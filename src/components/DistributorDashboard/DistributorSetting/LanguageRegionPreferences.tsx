"use client";

import { useState } from "react";

export function LanguageRegionPreferences() {
  const [language, setLanguage] = useState("english");
  const [timeZone, setTimeZone] = useState("utc");
  const [region, setRegion] = useState("usa");

  return (
    <div className="w-full bg-[#0D1D22] p-8 rounded-xl shadow-md space-y-8">
      {/* Title */}
      <h2 className="text-xl font-semibold text-white">
        Language & Region Preferences
      </h2>

      <div className="space-y-6">
        {/* Language */}
        <div className="space-y-2">
          <label htmlFor="language" className="text-sm text-gray-400">
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 border-[#B3B3B3] rounded-xl  bg-[#253438] focus:ring-2 focus:ring-emerald-500"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="italian">Italian</option>
            <option value="portuguese">Portuguese</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>

        {/* Time Zone */}
        <div className="space-y-2">
          <label htmlFor="timezone" className="text-sm text-gray-400">
            Time Zone
          </label>
          <select
            id="timezone"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="w-full p-3 border-[#B3B3B3] rounded-xl  bg-[#253438]  focus:ring-2 focus:ring-emerald-500"
          >
            <option value="utc">UTC</option>
            <option value="est">EST (Eastern Standard Time)</option>
            <option value="pst">PST (Pacific Standard Time)</option>
            <option value="cst">CST (Central Standard Time)</option>
            <option value="mst">MST (Mountain Standard Time)</option>
            <option value="gmt">GMT (Greenwich Mean Time)</option>
            <option value="cet">CET (Central European Time)</option>
            <option value="jst">JST (Japan Standard Time)</option>
          </select>
        </div>

        {/* Region */}
        <div className="space-y-2">
          <label htmlFor="region" className="text-sm text-gray-400">
            Region
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-3 border-[#B3B3B3] rounded-xl  bg-[#253438]  focus:ring-2 focus:ring-emerald-500"
          >
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="germany">Germany</option>
            <option value="france">France</option>
            <option value="spain">Spain</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="australia">Australia</option>
          </select>
        </div>
      </div>
    </div>
  );
}
