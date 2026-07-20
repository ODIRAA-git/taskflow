export default function FeaturesSection() {
  const features = [
    {
      title: "Project Management",
      description:
        "Create and organize projects with ease.",
    },
    {
      title: "Task Tracking",
      description:
        "Track work from To Do to Done.",
    },
    {
      title: "Team Collaboration",
      description:
        "Work together and stay aligned.",
    },
    {
      title: "Priority Management",
      description:
        "Focus on the tasks that matter most.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Everything You Need To Stay Productive
        </h2>

        <p className="mt-4 text-center text-gray-600">
          Manage projects, track tasks, and keep teams
          moving forward.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 