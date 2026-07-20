import Navbar from "../components/NavBar";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FeaturesSection />
      <HowItWorksSection />


      <main className="min-h-screen bg-gray-50">
        <section className="flex flex-col items-center text-center py-20 px-6">
          <h1 className="text-5xl font-bold max-w-3xl">
            Manage your team's work with TaskFlow
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl">
            Plan projects, organize tasks, and collaborate with your team
            in one powerful workspace.
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
            Get Started
          </button>
        </section>

        <section className="px-6 py-12">
          <h2 className="text-3xl font-bold text-center">
            Everything your team needs
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">
                Project Management
              </h3>
              <p className="mt-3 text-gray-600">
                Create and organize projects easily.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">
                Task Tracking
              </h3>
              <p className="mt-3 text-gray-600">
                Track progress from start to finish.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-semibold">
                Team Collaboration
              </h3>
              <p className="mt-3 text-gray-600">
                Work together in real time.
              </p>
            </div>
          </div>
        </section>
      </main>
    <Footer />
    </>
  );
}