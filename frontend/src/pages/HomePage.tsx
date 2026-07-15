import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section>
          <h1>Manage your team's work with TaskFlow</h1>

          <p>
            Plan projects, organize tasks, and collaborate with your team
            in one powerful workspace.
          </p>

          <button>
            Get Started
          </button>
        </section>

        <section>
          <h2>Everything your team needs</h2>

          <ul>
            <li>Project management</li>
            <li>Task tracking</li>
            <li>Team collaboration</li>
          </ul>
        </section>
      </main>
    </>
  );
}