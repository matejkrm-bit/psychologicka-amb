import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tym')({ component: TeamLayout })

function TeamLayout() {
  return <Outlet />
}
