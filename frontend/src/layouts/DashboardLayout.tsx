import { Link } from "react-router-dom";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode; //This component accepts anything React can render and will call it children
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-black p-6 text-white">
        <h2 className="text-2xl font-bold">
          TaskFlow
        </h2>

        <nav className="mt-8 flex flex-col gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}