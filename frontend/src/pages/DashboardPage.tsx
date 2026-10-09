import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import { getProjects } from "../services/projectService";
import { getTasks } from "../services/taskService";

export default function DashboardPage() {
  const [projectCount, setProjectCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const [tasks, setTasks] = useState<
    {
      id: number;
      title: string;
      status: string;
      createdAt: string;
    }[]
  >([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const projects = await getProjects();
        setProjectCount(projects.length);

        const loadedTasks = await getTasks();

        setTasks(loadedTasks);

        setTaskCount(loadedTasks.length);

        setCompletedCount(
          loadedTasks.filter(
            (task) => task.status === "Done"
          ).length
        );
      } catch (error) {
        console.error(
          "Failed to load dashboard data:",
          error
        );
      }
    };

    loadDashboardData();
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
          value={taskCount}
        />

        <StatCard
          title="Completed"
          value={completedCount}
        />
      </div>

      <RecentActivity tasks={tasks} />

      <QuickActions />
    </DashboardLayout>
  );
}