import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { UserMenu, type User } from './UserMenu'

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

interface TopNavProps {
  items: NavigationItem[]
  user?: User
  onNavigate?: (href: string) => void
  onLogout?: () => void
}

export function TopNav({ items, user, onNavigate, onLogout }: TopNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    onNavigate?.(href)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
              <span className="text-slate-900 font-bold text-sm">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-amber-600 dark:text-amber-400">HeliOS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`
                  px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${item.isActive
                    ? 'text-amber-600 dark:text-amber-400 bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }
                `}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Menu - Desktop */}
          <div className="hidden md:block">
            {user && <UserMenu user={user} onLogout={onLogout} />}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`
                  block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${item.isActive
                    ? 'text-amber-600 dark:text-amber-400 bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }
                `}
                aria-current={item.isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile user menu */}
          {user && (
            <div className="pt-4 pb-3 border-t border-slate-200 dark:border-slate-800">
              <div className="px-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-semibold text-sm flex-shrink-0">
                  {user.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-200 truncate">
                    {user.name}
                  </div>
                  {user.company && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 truncate">
                      {user.company}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 px-2">
                <button
                  onClick={() => {
                    onLogout?.()
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  )
}
