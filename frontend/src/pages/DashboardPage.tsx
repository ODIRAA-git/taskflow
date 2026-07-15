import DashboardLayout from "../layouts/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Welcome to TaskFlow
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your projects and tasks from here.
      </p>
    </DashboardLayout>
  );
}