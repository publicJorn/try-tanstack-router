import { createRoute } from "@tanstack/react-router";
import { ExtraLayout } from "@/components/layout/extra-layout";
import { rootRoute } from "@/app";
import { AboutPeople } from "./about-people";
// import { People } from "./people";
import { Person } from "./person";

// export const peopleRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "people",
// });

// // has Outlet
// const peopleIndex = createRoute({
//   getParentRoute: () => peopleRoute,
//   path: "/",
//   component: People,
// });

const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "people",
}).lazy(() => import("./people").then((c) => c.LazyPeople));

const about = createRoute({
  getParentRoute: () => rootRoute,
  path: "people/about",
  component: AboutPeople,
});

const personRoute = createRoute({
  getParentRoute: () => peopleRoute, // using Outlet
  path: "$name",
  component: () => (
    <ExtraLayout>
      <Person />
    </ExtraLayout>
  ),
});

export const peopleRouter = peopleRoute.addChildren([
  // peopleIndex,
  // peopleIndex.addChildren([personRoute]),
  about,
  personRoute,
]);
