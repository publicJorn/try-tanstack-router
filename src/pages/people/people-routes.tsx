import { createRoute } from "@tanstack/react-router";
import { ExtraLayout } from "@/components/layout/extra-layout";
import { rootRoute } from "@/app";
import { People } from "./people";
import { Person } from "./person";

export const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "people",
  component: People,
});

const personRoute = createRoute({
  getParentRoute: () => peopleRoute,
  path: "$name",
  component: () => (
    <ExtraLayout>
      <Person />
    </ExtraLayout>
  ),
});

export const peopleRouter = peopleRoute.addChildren([personRoute]);
