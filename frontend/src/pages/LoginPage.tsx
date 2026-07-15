export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          Welcome back
        </h1>

        <p className="mt-2 text-gray-600">
          Login to your TaskFlow account
        </p>

        <form className="mt-6 space-y-4">
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
            Login
          </button>
        </form>
      </div>
    </main>
  );
}