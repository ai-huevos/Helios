import { useState } from 'react'
import { Menu, X, FileText, Target, Brain, Users, Cog, Settings, RefreshCcw } from 'lucide-react'
import { UserMenu, type User } from './UserMenu'

export interface NavigationItem {
  label: string
  href: string
  icon: 'specs' | 'ceo-os' | 'director' | 'team' | 'agents' | 'admin' | 'loop'
  isActive?: boolean
}

interface SidebarProps {
  items: NavigationItem[]
  user?: User
  onNavigate?: (href: string) => void
  onLogout?: () => void
}

const iconMap = {
  specs: FileText,
  'ceo-os': Target,
  director: Brain,
  team: Users,
  agents: Cog,
  admin: Settings,
  loop: RefreshCcw,
}

export function Sidebar({ items, user, onNavigate, onLogout }: SidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    onNavigate?.(href)
    setMobileMenuOpen(false)
  }

  const NavItems = ({ isMobile = false }: { isMobile?: boolean }) => (
    <nav className={`flex flex-col gap-1 ${isMobile ? 'px-2' : ''}`} role="navigation">
      {items.map((item) => {
        const Icon = iconMap[item.icon]
        return (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left
              ${item.isActive
                ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50'
                : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }
            `}
            aria-current={item.isActive ? 'page' : undefined}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-200 dark:border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
            <span className="text-slate-900 font-bold text-base">H</span>
          </div>
          <div>
            <div className="text-lg font-bold text-amber-600 dark:text-amber-400">HeliOS</div>
            <div className="text-xs text-slate-500 dark:text-slate-500">Company OS</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-3 py-4 overflow-y-auto">
          <NavItems />
        </div>

        {/* User Menu at bottom */}
        {user && (
          <div className="px-3 py-4 border-t border-slate-200 dark:border-slate-800">
            <UserMenu user={user} onLogout={onLogout} variant="sidebar" />
          </div>
        )}
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">H</span>
            </div>
            <div className="text-lg font-bold text-amber-600 dark:text-amber-400">HeliOS</div>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 w-72 bg-white dark:bg-slate-900 z-50 flex flex-col shadow-xl">
              {/* Logo */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">H</span>
                  </div>
                  <div className="text-lg font-bold text-amber-600 dark:text-amber-400">HeliOS</div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 py-4 overflow-y-auto">
                <NavItems isMobile />
              </div>

              {/* User menu */}
              {user && (
                <div className="px-3 py-4 border-t border-slate-200 dark:border-slate-800">
                  <UserMenu user={user} onLogout={onLogout} variant="sidebar" />
                </div>
              )}
            </div>
          </>
        )}
      </header>
    </>
  )
}
