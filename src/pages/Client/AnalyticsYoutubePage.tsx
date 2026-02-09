import Analytics from "@/components/ClientDashboard/Analytics/Analytics";

const AnalyticsYoutubePage = () => {
  return (
    <div>
      <Analytics platform="YouTube" />
    </div>
  );
};

export default AnalyticsYoutubePage;

// import { TopAssets } from "@/components/ClientDashboard/Analytics/Youtube/TopAssets";
// import { TopClaims } from "@/components/ClientDashboard/Analytics/Youtube/TopClaims";
// import { TopCountries } from "@/components/ClientDashboard/Analytics/Youtube/TopCountries";
// import { TopUsRegions } from "@/components/ClientDashboard/Analytics/Youtube/TopUsRegions";
// import Youtube from "@/components/ClientDashboard/Analytics/Youtube/Youtube";

// const AnalyticsYoutubePage = () => {
//   return (
//     <div className=" space-y-6">
//       <Youtube />
//       {/* 2nd part */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
//         <div className="xl:col-span-2 w-full">
//           <TopCountries />
//         </div>
//         <div className="w-full xl:col-span-2">
//           <TopUsRegions />
//         </div>
//       </div>
//       {/* 3rd part */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
//         <div className="xl:col-span-2 w-full">
//           <TopAssets />
//         </div>
//         <div className="w-full xl:col-span-2">
//           <TopClaims />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsYoutubePage;
