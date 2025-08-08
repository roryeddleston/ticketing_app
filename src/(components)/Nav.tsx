"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tickets", href: "/tickets" },
  { label: "About", href: "/about" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md">
      <ul className="flex gap-6 items-center text-sm font-medium">
        {navItems.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  isActive
                    ? "text-blue-600 underline"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
