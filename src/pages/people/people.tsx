import { /*createLazyRoute,*/ Link, Outlet } from "@tanstack/react-router";
import { PeopleNav } from "./people-nav";

// export const LazyPeople = createLazyRoute("/people")({
//   component: People,
// });

export function People() {
  return (
    <>
      <h1>People</h1>
      <PeopleNav />
      <hr />
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
      <Outlet />
    </>
  );
}
