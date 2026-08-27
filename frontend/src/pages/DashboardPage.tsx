import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { getProjects } from "../services/projectService";

export default function DashboardPage() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = await getProjects();
        setProjectCount(projects.length);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your projects and tasks from one place.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <StatCard
          title="Projects"
          value={projectCount}
        />

        <StatCard
          title="Tasks"
          value="24"
        />

        <StatCard
          title="Completed"
          value="12"
        />
      </div>

      <RecentActivity />
      <QuickActions />
    </DashboardLayout>
  );
}