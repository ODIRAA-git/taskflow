export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          Create account
        </h1>

        <p className="mt-2 text-gray-600">
          Join TaskFlow today
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <button
            className="w-full rounded-lg bg-black py-3 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}