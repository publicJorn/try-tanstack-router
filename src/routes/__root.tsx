import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Layout } from '@/components/layout/layout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return <>
      <Layout />
      <TanStackRouterDevtools />
    </>
}
