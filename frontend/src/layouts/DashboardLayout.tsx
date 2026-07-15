import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      <aside className="w-64 bg-black p-6 text-white">
        <h2 className="text-2xl font-bold">
          TaskFlow
        </h2>

        <nav className="mt-8 flex flex-col gap-4">
  <Link to="/dashboard" className="hover:text-gray-300">
    Dashboard
  </Link>

  <Link to="/projects" className="hover:text-gray-300">
    Projects
  </Link>

  <Link to="/tasks" className="hover:text-gray-300">
    Tasks
  </Link>

  <Link to="/profile">
    Profile
  </Link>
</nav>
      </aside>


      <main className="flex-1 bg-gray-50 p-8">
  <h1 className="text-3xl font-bold">
    Welcome to TaskFlow
  </h1>

  <p className="mt-2 text-gray-600">
    Manage your projects and tasks from here.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    <StatCard 
      title="Projects"
      value="8"
    />

    <StatCard 
      title="Tasks"
      value="24"
    />

    <StatCard 
      title="Team Members"
      value="12"
    />
  </div>
</main>

    </div>
  );
}