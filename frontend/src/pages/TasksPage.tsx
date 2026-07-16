import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";

export default function TasksPage() {
  const [columns, setColumns] = useState([
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
]);
const [taskName, setTaskName] = useState("");

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Tasks
      </h1>
<div className="my-6 flex gap-4">
  <input
    type="text"
    placeholder="Task name"
    value={taskName}
    onChange={(e) => setTaskName(e.target.value)}
    className="flex-1 rounded-lg border p-3"
  />

  <button
    className="rounded-lg bg-black px-4 py-2 text-white"
    onClick={() => {
      if (!taskName.trim()) return;

      const updatedColumns = [...columns];

      updatedColumns[0].tasks.push(taskName);

      setColumns(updatedColumns);

      setTaskName("");
    }}
  >
    Add Task
  </button>
</div>
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
    </DashboardLayout>
  );
}