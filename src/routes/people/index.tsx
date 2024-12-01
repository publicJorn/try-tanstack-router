import { createFileRoute } from '@tanstack/react-router'

import { People } from '@/pages/people/people'

export const Route = createFileRoute('/people/')({
  component: People,
})
