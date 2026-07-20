import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold">
        {project.name}
      </h2>

      <p className="mt-3 text-gray-600">
        {project.description}
      </p>

      <div className="mt-4 flex gap-2">
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          className="rounded-lg bg-red-600 px-4 py-2 text-white"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}