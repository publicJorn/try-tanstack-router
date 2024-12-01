import { createFileRoute } from '@tanstack/react-router'

import { About } from '@/pages/about/about'

export const Route = createFileRoute('/about')({
  component: About,
})
