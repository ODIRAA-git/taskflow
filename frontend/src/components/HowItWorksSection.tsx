export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create a Project",
      description:
        "Start by creating a project for your team or personal work.",
    },
    {
      number: "02",
      title: "Add Tasks",
      description:
        "Break work into manageable tasks and set priorities.",
    },
    {
      number: "03",
      title: "Track Progress",
      description:
        "Move tasks through your workflow and stay organized.",
    },
    {
      number: "04",
      title: "Deliver Results",
      description:
        "Complete projects efficiently and hit your goals.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-bold">
          How TaskFlow Works
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border p-6 text-center"
            >
              <div className="text-4xl font-bold text-gray-300">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}