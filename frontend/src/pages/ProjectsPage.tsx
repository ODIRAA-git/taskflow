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
  const [projectName, setProjectName] = useState("");
const [projectDescription, setProjectDescription] = useState("");

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Projects
      </h1>
<div className="mb-6 space-y-4">
  <input
    type="text"
    placeholder="Project Name"
    value={projectName}
    onChange={(e) => setProjectName(e.target.value)}
    className="w-full rounded-lg border p-3"
  />

  <input
    type="text"
    placeholder="Project Description"
    value={projectDescription}
    onChange={(e) => setProjectDescription(e.target.value)}
    className="w-full rounded-lg border p-3"
  />
</div>
      <button
        className="mt-6 mb-6 rounded-lg bg-black px-4 py-2 text-white"
        onClick={() => {
  if (!projectName.trim()) return;

  setProjects([
    ...projects,
    {
      id: Date.now(),
      name: projectName,
      description: projectDescription,
    },
  ]);

  setProjectName("");
  setProjectDescription("");
}}
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