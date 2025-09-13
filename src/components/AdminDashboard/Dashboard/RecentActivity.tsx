const activities = [
  {
    type: "submission",
    user: "The Weekend",
    title: "New submission from",
    day: "Single",
    time: "10 minutes ago",
  },
  {
    type: "payment",
    user: "Taylor Swift",
    title: "$42,582.50 for Q2 2023 royalties",
    day: "Taylor Swift",
    time: "1 hour ago",
  },
  {
    type: "release",
    user: "Drake",
    title: 'Single "Hotline Bling" scheduled for Oct 15',
    day: "Drake",
    time: "3 hours ago",
  },
  {
    type: "onboard",
    user: "Ariana Grande",
    title: "Account setup completed by Admin",
    day: "Ariana Grande",
    time: "Yesterday at 4:30 PM",
  },
  {
    type: "flagged",
    user: "Billie Eilish",
    title: "Artwork needs revision due to copyright concerns",
    day: "Billie Eilish",
    time: "Yesterday at 2:15 PM",
  },
];

const iconColors: Record<string, string> = {
  submission: "bg-green-500",
  payment: "bg-blue-500",
  release: "bg-purple-500",
  onboard: "bg-yellow-500",
  flagged: "bg-red-500",
};

const RecentActivity = () => {
  return (
    <div className="bg-[#0C1D21] text-white rounded-xl p-6 w-full shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          View All
        </a>
      </div>

      {/* Activity List */}
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-start justify-between gap-3">
            {/* Left: Icon and content */}
            <div className="flex items-start gap-3 flex-1">
              {/* Icon */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                  iconColors[activity.type]
                }`}
              >
                {activity.type[0].toUpperCase()}
              </div>

              {/* Text Content */}
              <div>
                <div className="text-sm gap-2  mb-1">
                  <p>
                    {activity.title}{" "}
                    <span className="text-[#01D449]">{activity.day}</span>
                  </p>
                  <p className="font-semibold">{activity.user}</p>{" "}
                </div>
              </div>
            </div>

            {/* Right: Time */}
            <div className="text-xs text-gray-400 whitespace-nowrap">
              {activity.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
