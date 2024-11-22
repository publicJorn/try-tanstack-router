import { createRoute } from "@tanstack/react-router";

import { rootRoute } from "@/app";
import { People } from "./people";
import { Person } from "./person";

const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "people",
});

const peopleIndexRoute = createRoute({
  getParentRoute: () => peopleRoute,
  path: "/",
  component: People,
});

const personRoute = createRoute({
  getParentRoute: () => peopleIndexRoute,
  path: "$name",
  component: Person,
});

peopleRoute.addChildren([peopleIndexRoute, personRoute]);

export { peopleRoute };
