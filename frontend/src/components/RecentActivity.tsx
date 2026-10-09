type RecentActivityProps = {
  tasks: {
    id: number;
    title: string;
    status: string;
    createdAt: string;
  }[];
};

export default function RecentActivity({
  tasks,
}: RecentActivityProps) {
  const recentTasks = [...tasks]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 4);

  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-4 space-y-3">
        {recentTasks.length === 0 ? (
          <p className="text-gray-500">
            No recent activity.
          </p>
        ) : (
          recentTasks.map((task) => (
            <div
              key={task.id}
              className="rounded-lg bg-gray-50 p-3 text-gray-700"
            >
              {task.status === "Done"
                ? `Completed task: ${task.title}`
                : `Created task: ${task.title}`}
            </div>
          ))
        )}
      </div>
    </div>
  );
}