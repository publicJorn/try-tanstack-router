import { Link } from "@tanstack/react-router";

export function PeopleNav() {
  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/people">people</Link>
      <Link to="/people/about">about people</Link>
    </nav>
  );
}
