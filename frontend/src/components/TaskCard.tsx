type Task = {
  id: number;
  title: string;
  priority: string;
};

type TaskCardProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onMove: () => void;
};

export default function TaskCard({
  task,
  onEdit,
  onDelete,
  onMove,
}: TaskCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <p className="font-medium">
        {task.title}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Priority: {task.priority}
      </p>

      <div className="mt-3 flex gap-2">
        <button
          className="rounded-lg bg-blue-600 px-3 py-1 text-sm text-white"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          className="rounded-lg bg-red-600 px-3 py-1 text-sm text-white"
          onClick={onDelete}
        >
          Delete
        </button>

        <button
          className="rounded-lg bg-green-600 px-3 py-1 text-sm text-white"
          onClick={onMove}
        >
          Move →
        </button>
      </div>
    </div>
  );
}