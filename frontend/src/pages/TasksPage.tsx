import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export default function TasksPage() {
  const [columns, setColumns] = useState([
  {
    title: "To Do",
    tasks: [],
  },
  {
    title: "In Progress",
    tasks: [],
  },
  {
    title: "Done",
    tasks: [],
  },
]);
useEffect(() => {
  const loadTasks = async () => {
    try {
      const tasks = await getTasks();

      setColumns([
        {
          title: "To Do",
          tasks: tasks.filter((task) => task.status === "To Do"),
        },
        {
          title: "In Progress",
          tasks: tasks.filter((task) => task.status === "In Progress"),
        },
        {
          title: "Done",
          tasks: tasks.filter((task) => task.status === "Done"),
        },
      ]);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  loadTasks();
}, []);
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
    onClick={async () => {
      if (!taskName.trim()) return;

     if (editingTaskId) {
  try {
    const updatedTask = await updateTask(
      editingTaskId,
      taskName,
      taskPriority,
      taskStatus
    );

    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks
        .filter((task) => task.id !== editingTaskId)
        .concat(
          column.title === taskStatus ? [updatedTask] : []
        ),
    }));

    setColumns(updatedColumns);
    setEditingTaskId(null);
  } catch (error) {
    console.error("Failed to update task:", error);
  }

      } else {
  try {
    const newTask = await createTask(
      taskName,
      taskPriority,
      taskStatus
    );

    const updatedColumns = columns.map((column) =>
      column.title === taskStatus
        ? {
            ...column,
            tasks: [...column.tasks, newTask],
          }
        : column
    );

    setColumns(updatedColumns);
  } catch (error) {
    console.error("Failed to create task:", error);
  }
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
  <TaskCard
  key={task.id}
  task={task}
  onEdit={() => {
    setEditingTaskId(task.id);
    setTaskName(task.title);
    setTaskPriority(task.priority);
    setTaskStatus(column.title);
  }}
 onDelete={async () => {
  try {
    await deleteTask(task.id);

    const updatedColumns = columns.map((column) => ({
      ...column,
      tasks: column.tasks.filter(
        (item) => item.id !== task.id
      ),
    }));

    setColumns(updatedColumns);
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
}}
  onMove={async () => {
  try {
    const currentColumnIndex = columns.findIndex(
      (c) => c.title === column.title
    );

    const nextColumnIndex =
      currentColumnIndex === columns.length - 1
        ? 0
        : currentColumnIndex + 1;

    const nextStatus = columns[nextColumnIndex].title;

    const updatedTask = await updateTask(
      task.id,
      task.title,
      task.priority,
      nextStatus
    );

    const updatedColumns = columns.map((col) => ({
      ...col,
      tasks: col.tasks.filter(
        (t) => t.id !== task.id
      ),
    }));

    updatedColumns[nextColumnIndex].tasks.push(updatedTask);

    setColumns(updatedColumns);
  } catch (error) {
    console.error("Failed to move task:", error);
  }
}}
/>
))}

            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}