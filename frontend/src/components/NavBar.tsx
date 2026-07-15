import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">TaskFlow</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/register">Register</Link>
    </nav>
  );
}