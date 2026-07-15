import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <Link 
        to="/" 
        className="text-2xl font-bold"
      >
        TaskFlow
      </Link>

      <div className="flex gap-6">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>

        <Link to="/login" className="text-gray-600 hover:text-black">
          Login
        </Link>

        <Link to="/register" className="rounded-lg bg-black px-4 py-2 text-white">
          Register
        </Link>
      </div>
    </nav>
  );
}