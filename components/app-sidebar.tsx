'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Search, ClipboardList, Clock, Bookmark, Info, LogOut } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard?tab=search', label: 'Search', icon: Search },
    { href: '/results', label: 'Results', icon: ClipboardList },
    { href: '#history', label: 'History', icon: Clock },
    { href: '#saved', label: 'Saved Results', icon: Bookmark },
    { href: '#about', label: 'About', icon: Info },
  ];

  return (
    <div className="w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-zinc-800">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">S</div>
          <div>
            <p className="text-sm font-semibold text-white">SatSearch</p>
            <p className="text-xs text-zinc-400">Cross-Modal Retrieval</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white font-medium'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-zinc-800 space-y-2">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </div>
  );
}
