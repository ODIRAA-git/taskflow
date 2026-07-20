import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

export default function DashboardPage() {
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
    value="5"
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
