import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectCard from "../components/ProjectCard";

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
const [editingProjectId, setEditingProjectId] = useState<number | null>(null);

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

  if (editingProjectId) {
    setProjects(
      projects.map((project) =>
        project.id === editingProjectId
          ? {
              ...project,
              name: projectName,
              description: projectDescription,
            }
          : project
      )
    );

    setEditingProjectId(null);
  } else {
    setProjects([
      ...projects,
      {
        id: Date.now(),
        name: projectName,
        description: projectDescription,
      },
    ]);
  }

  setProjectName("");
  setProjectDescription("");
}}
      >
        {editingProjectId ? "Update Project" : "Create Project"}
      </button>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
         <ProjectCard
  key={project.id}
  project={project}
  onEdit={() => {
    setEditingProjectId(project.id);
    setProjectName(project.name);
    setProjectDescription(project.description);
  }}
  onDelete={() => {
    setProjects(
      projects.filter(
        (p) => p.id !== project.id
      )
    );
  }}
/>
        ))}
      </div>
    </DashboardLayout>
  );
}