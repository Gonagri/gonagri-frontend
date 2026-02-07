"use client";

import { useState } from "react";
import Link from "next/link";
import { nav_links } from "@/app/libs/constants/links";
import { Menu, X } from "lucide-react";
import MobileMenu from "@/app/components/comingsoon/MobileMenu";

const ComingSoonHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#fffffff2] z-1000 backdrop-blur-[10px] shadow-md">
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 no-underline transition-opacity duration-200 hover:opacity-80"
        >
          <div className="w-12 h-12 bg-linear-to-br from-[#2A7221] to-[#1b4715] rounded-xl flex items-center justify-center shadow-lg">
            🌾
          </div>
          <div>
            <span className="text-[1.5rem] text-[#225c1a] font-bold">
              Gonagri
            </span>
            <span className="text-[0.75rem] text-neutral-500 block">
              Agri-Business Connections
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {nav_links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="no-underline text-neutral-600 font-medium transition-colors duration-200 hover:text-[#225c1a]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex bg-[#2A7221] text-white shadow-md rounded-lg hover:bg-[#225c1a] transition-colors duration-200">
          <Link
            href={nav_links[3].href}
            className="inline-flex items-center justify-center gap-4 px-6 py-3 font-semibold no-underline"
          >
            {nav_links[4].name}
            <span>→</span>
          </Link>
        </div>

        {/* Mobile Hambuger */}
        <button
          onClick={() => setOpen(!open)}
          className="block md:hidden p-2 border-0 cursor-pointer"
        >
          {open ? (
            <X className="w-6 h-6 text-neutral-600" />
          ) : (
            <Menu className="w-6 h-6 text-neutral-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default ComingSoonHeader;
