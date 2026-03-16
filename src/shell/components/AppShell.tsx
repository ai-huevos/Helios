import { Sidebar, type NavigationItem } from './Sidebar'
import { type User } from './UserMenu'

interface AppShellProps {
  children: React.ReactNode
  navigationItems: NavigationItem[]
  user?: User
  onNavigate?: (href: string) => void
  onLogout?: () => void
}

export function AppShell({
  children,
  navigationItems,
  user = { name: 'Guest User' },
  onNavigate,
  onLogout
}: AppShellProps) {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar Navigation */}
      <Sidebar
        items={navigationItems}
        user={user}
        onNavigate={onNavigate}
        onLogout={onLogout}
      />

      {/* Main content area */}
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Mobile: account for header height */}
        <div className="md:hidden h-14 flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
