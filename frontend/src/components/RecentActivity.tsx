export default function RecentActivity() {
  const activities = [
    "Created a new project: Mobile App",
    "Completed task: Setup React project",
    "Moved task: Build authentication to Done",
    "Updated project: Website Redesign",
  ];

  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-4 space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-50 p-3 text-gray-700"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}