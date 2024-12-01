import { createFileRoute } from '@tanstack/react-router'

import { Person } from '@/pages/people/person'

export const Route = createFileRoute('/people/$name')({
  component: Person,
})
