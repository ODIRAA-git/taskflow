import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the company website",
    },
    {
      id: 2,
      name: "Mobile App",
      description: "Build the TaskFlow mobile application",
    },
  ]);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <button
        className="mt-6 mb-6 rounded-lg bg-black px-4 py-2 text-white"
        onClick={() =>
          setProjects([
            ...projects,
            {
              id: Date.now(),
              name: "New Project",
              description: "Project description",
            },
          ])
        }
      >
        Create Project
      </button>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white p-6 shadow"
          >
            <h2 className="text-xl font-semibold">
              {project.name}
            </h2>

            <p className="mt-3 text-gray-600">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}