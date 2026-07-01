'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Search, GitCompareArrows, MapPin, BarChart3, Settings } from 'lucide-react';

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/results', label: 'Results', icon: Search },
    { href: '/compare', label: 'Compare', icon: GitCompareArrows },
    { href: '/map', label: 'Map', icon: MapPin },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950 text-white">
      {/* Sidebar */}
      <aside className="w-56 border-r border-zinc-800 bg-zinc-950 flex flex-col">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 p-6 border-b border-zinc-800 hover:opacity-70 transition">
          <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-black text-sm">S</div>
          <div>
            <p className="text-xs font-semibold tracking-tight">SATELLITE</p>
            <p className="text-xs text-zinc-500">Retrieval</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition ${
                  isActive
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 space-y-2 text-xs">
          <a href="#" className="block text-zinc-400 hover:text-white transition">Documentation</a>
          <a href="#" className="block text-zinc-400 hover:text-white transition">GitHub</a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-0 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
