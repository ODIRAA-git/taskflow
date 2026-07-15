export default function TasksPage() {
  const columns = [
    {
      title: "To Do",
      tasks: [
        "Create homepage",
        "Design database",
      ],
    },
    {
      title: "In Progress",
      tasks: [
        "Build authentication",
      ],
    },
    {
      title: "Done",
      tasks: [
        "Setup React project",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold">
        Tasks
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {columns.map((column) => (
          <div
            key={column.title}
            className="rounded-xl bg-gray-200 p-5"
          >
            <h2 className="text-xl font-semibold">
              {column.title}
            </h2>

            <div className="mt-4 space-y-3">
              {column.tasks.map((task) => (
                <div
                  key={task}
                  className="rounded-lg bg-white p-4 shadow"
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}