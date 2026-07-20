export default function QuickActions() {
  const actions = [
    "Create Project",
    "Add Task",
    "View Projects",
  ];

  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">
        Quick Actions
      </h2>

      <div className="mt-4 flex flex-wrap gap-4">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-80"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}