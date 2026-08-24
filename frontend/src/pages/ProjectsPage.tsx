import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  getProjects,
  createProject,
  updateProject,
} from "../services/projectService";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [projectName, setProjectName] = useState("");
const [projectDescription, setProjectDescription] = useState("");
const [editingProjectId, setEditingProjectId] = useState<number | null>(null);

useEffect(() => {
  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  loadProjects();
}, []);

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
  onClick={async () => {
    if (!projectName.trim()) return;

    try {
    if (editingProjectId) {
  const updatedProject = await updateProject(
    editingProjectId,
    projectName,
    projectDescription
  );

  setProjects(
    projects.map((project) =>
      project.id === editingProjectId
        ? updatedProject
        : project
    )
  );

  setEditingProjectId(null);
} else {
        const newProject = await createProject(
          projectName,
          projectDescription
        );

        setProjects([...projects, newProject]);
      }

      setProjectName("");
      setProjectDescription("");
    } catch (error) {
      console.error("Failed to save project:", error);
    }
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