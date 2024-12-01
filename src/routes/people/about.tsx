import { createFileRoute } from '@tanstack/react-router'

import { AboutPeople } from '@/pages/people/about-people'

export const Route = createFileRoute('/people/about')({
  component: AboutPeople,
})
