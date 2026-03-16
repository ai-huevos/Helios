import { AppShell } from './components/AppShell'
import type { NavigationItem } from './components/Sidebar'

export default function ShellPreview() {
  const navigationItems: NavigationItem[] = [
    {
      label: 'Machine-Readable Specs',
      href: '/specs',
      icon: 'specs',
      isActive: false,
    },
    {
      label: 'CEO Operating System',
      href: '/ceo-os',
      icon: 'ceo-os',
      isActive: true, // Default home
    },
    {
      label: 'Director AI',
      href: '/director',
      icon: 'director',
      isActive: false,
    },
    {
      label: 'Team & Resources',
      href: '/team',
      icon: 'team',
      isActive: false,
    },
    {
      label: 'Automation Agents',
      href: '/agents',
      icon: 'agents',
      isActive: false,
    },
    {
      label: 'Admin & Settings',
      href: '/admin',
      icon: 'admin',
      isActive: false,
    },
    {
      label: 'The Loop',
      href: '/loop',
      icon: 'loop',
      isActive: false,
    },
  ]

  const user = {
    name: 'María González',
    company: 'Tech Startup LATAM',
  }

  return (
    <AppShell
      navigationItems={navigationItems}
      user={user}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onLogout={() => console.log('Logout clicked')}
    >
      {/* Content area preview */}
      <div className="p-8 max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
            CEO Operating System
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            The 6-block framework for high-velocity company operations
          </p>
        </div>

        {/* Sample content cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Individual Habits',
              description: 'GTD methodology and Top Goal tracking',
              icon: '🎯',
            },
            {
              title: 'Collaboration',
              description: '1:1s, feedback loops, and team alignment',
              icon: '🤝',
            },
            {
              title: 'Infrastructure',
              description: 'OKRs, AORs, KPIs foundation',
              icon: '🏗️',
            },
            {
              title: 'Group Habits',
              description: 'Monday kickoffs, Friday retrospectives',
              icon: '📅',
            },
            {
              title: 'Processes',
              description: 'Sales, recruiting, fundraising playbooks',
              icon: '⚙️',
            },
            {
              title: 'AI Integration',
              description: 'NotebookLM + Claude Code workflows',
              icon: '🤖',
            },
          ].map((block, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 hover:border-amber-400/30 transition-colors"
            >
              <div className="text-4xl mb-4">{block.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                {block.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{block.description}</p>
            </div>
          ))}
        </div>

        {/* Sample metrics section */}
        <div className="mt-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Weekly Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">Top Goal Progress</div>
              <div className="text-5xl font-bold font-mono text-amber-600 dark:text-amber-400">
                67%
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">1:1s Completed</div>
              <div className="text-5xl font-bold font-mono text-blue-600 dark:text-blue-400">
                12/15
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">OKRs On Track</div>
              <div className="text-5xl font-bold font-mono text-violet-600 dark:text-violet-400">
                8/10
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-500">
          This is a preview of the HeliOS application shell. Section content will render in this area.
        </div>
      </div>
    </AppShell>
  )
}
