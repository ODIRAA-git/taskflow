export default function ProjectsPage() {
  const projects = [
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
    {
      id: 3,
      name: "Marketing Campaign",
      description: "Launch a new marketing campaign",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
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

            <button className="mt-5 rounded-lg bg-black px-4 py-2 text-white">
              View Project
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}