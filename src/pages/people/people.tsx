import { Link, Outlet } from "@tanstack/react-router";

export function People() {
  return (
    <>
      <h1>People</h1>
      <p>Choose a person!</p>
      <ul>
        <li>
          <Link to="/people/$name" params={{ name: "Jane" }}>
            Jane
          </Link>
        </li>
        <li>
          <Link to="/people/$name" params={{ name: "Joe" }}>
            Joe
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
