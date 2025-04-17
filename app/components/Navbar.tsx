'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center gap-6 py-4 border-b border-gray-200 dark:border-gray-800">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`text-sm font-medium ${
            pathname === href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
