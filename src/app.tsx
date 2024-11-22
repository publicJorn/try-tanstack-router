import {
  createRoute,
  RouterProvider,
  createRootRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "./components/layout/layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { peopleRouter } from "./pages/people/people-routes";

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout />
      <TanStackRouterDevtools />
    </>
  ),
});

const homeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Home,
});

const aboutRoute = createRoute({
  path: "about",
  getParentRoute: () => rootRoute,
  component: About,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, peopleRouter]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return <RouterProvider router={router} />;
}
