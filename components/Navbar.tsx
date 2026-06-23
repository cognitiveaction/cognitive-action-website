"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, Menu, X } from "lucide-react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/platform", label: "Platform" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-[#D2D2D7]/50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/home" className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-[#0071E3]" />
          <span className="text-[#1D1D1F] font-semibold text-lg tracking-tight">
            CognitiveAction
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#1D1D1F] font-medium"
                  : "text-[#6E6E73] hover:text-[#1D1D1F]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#1D1D1F]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#D2D2D7]/50 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-base transition-colors ${
                  pathname === link.href
                    ? "text-[#1D1D1F] font-medium"
                    : "text-[#6E6E73]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
