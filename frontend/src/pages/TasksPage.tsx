import DashboardLayout from "../layouts/DashboardLayout";
import { useState } from "react";

export default function TasksPage() {
  const [columns, setColumns] = useState([
  {
    title: "To Do",
    tasks: [
  {
    id: 1,
    title: "Create homepage",
    priority: "High",
  },
  {
    id: 2,
    title: "Design database",
    priority: "Medium",
  },
],
  },
  {
    title: "In Progress",
   tasks: [
  {
    id: 3,
    title: "Build authentication",
    priority: "High",
  },
],
  },
  {
    title: "Done",
   tasks: [
  {
    id: 4,
    title: "Setup React project",
    priority: "Low",
  },
],
  },
]);
const [taskName, setTaskName] = useState("");
const [taskStatus, setTaskStatus] = useState("To Do");
const [taskPriority, setTaskPriority] = useState("Medium");
const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
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
  <select
  value={taskStatus}
  onChange={(e) => setTaskStatus(e.target.value)}
  className="rounded-lg border p-3"
>
  <option>To Do</option>
  <option>In Progress</option>
  <option>Done</option>
</select>
<select
  value={taskPriority}
  onChange={(e) => setTaskPriority(e.target.value)}
  className="rounded-lg border p-3"
>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>

  <button
    className="rounded-lg bg-black px-4 py-2 text-white"
    onClick={() => {
      if (!taskName.trim()) return;

      if (editingTaskId) {
        const updatedColumns = columns.map((column) => ({
          ...column,
          tasks: column.tasks.map((task) =>
            task.id === editingTaskId
              ? {
                  ...task,
                  title: taskName,
                  priority: taskPriority,
                }
              : task
          ),
        }));

        setColumns(updatedColumns);
        setEditingTaskId(null);
      } else {
        const updatedColumns = [...columns];

        const columnIndex = updatedColumns.findIndex(
          (column) => column.title === taskStatus
        );

        updatedColumns[columnIndex].tasks.push({
          id: Date.now(),
          title: taskName,
          priority: taskPriority,
        });

        setColumns(updatedColumns);
      }

      setTaskName("");
      setTaskStatus("To Do");
      setTaskPriority("Medium");
    }}
  >
    {editingTaskId ? "Update Task" : "Add Task"}
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
    key={task.id}
    className="rounded-lg bg-white p-4 shadow"
  >
    <p className="font-medium">
      {task.title}
    </p>

    <p className="mt-2 text-sm text-gray-500">
      Priority: {task.priority}
    </p>
    <button
  className="mt-3 mr-2 rounded-lg bg-blue-600 px-3 py-1 text-sm text-white"
  onClick={() => {
    setEditingTaskId(task.id);
    setTaskName(task.title);
    setTaskPriority(task.priority);
    setTaskStatus(column.title);
  }}
>
  Edit
</button>
    <button
  className="mt-3 rounded-lg bg-red-600 px-3 py-1 text-sm text-white"
  onClick={() => {
    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.filter(
        (item) => item.id !== task.id
      ),
    }));

    setColumns(updatedColumns);
  }}
>
  Delete
</button>
<button
  className="mt-3 rounded-lg bg-green-600 px-3 py-1 text-sm text-white"
  onClick={() => {
    const currentColumnIndex = columns.findIndex(
      (c) => c.title === column.title
    );

    const nextColumnIndex =
      currentColumnIndex === columns.length - 1
        ? 0
        : currentColumnIndex + 1;

    const updatedColumns = columns.map((col) => ({
      ...col,
      tasks: [...col.tasks],
    }));

    updatedColumns[currentColumnIndex].tasks =
      updatedColumns[currentColumnIndex].tasks.filter(
        (t) => t.id !== task.id
      );

    updatedColumns[nextColumnIndex].tasks.push(task);

    setColumns(updatedColumns);
  }}
>
  Move →
</button>
  </div>
))}

            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}