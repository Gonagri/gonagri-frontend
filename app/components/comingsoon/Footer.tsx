import React from "react";
//Links
import nav_links from "@/app/libs/constants/links";
import { footer_link } from "@/app/libs/constants/links";
//Icons
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const ComingSoonFooter = () => {
  return (
    <footer className="bg-[#111827] text-neutral-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#2A7221] to-[#1b4715] rounded-xl flex items-center justify-center shadow-lg">
                🌾
              </div>
              <div>
                <span className="text-[1.5rem] text-white font-bold">
                  GONAGRI
                </span>
                <span className="text-xl text-neutral-400 block">
                  Agri-Business Connections
                </span>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 max-w-md leading-[1.7]">
              Connecting farmers, buyers, suppliers, and partners across Africa.
              Building the future of agricultural commerce, one connection at a
              time.
            </p>
            <div className="flex gap-8 mb-6 text-2xl">
              <span className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 cursor-pointer transition-all duration-300 hover:bg-[#2A7221]">
                <Facebook />
              </span>
              <span className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 cursor-pointer transition-all duration-300 hover:bg-[#2A7221]">
                𝕏
              </span>
              <span className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-300 cursor-pointer transition-all duration-300 hover:bg-[#2A7221]">
                <Instagram />
              </span>
            </div>
          </div>
          <div>
            <ul className="list-none">
              <li className="mb-3">
                <h5 className="text-white mb-4">Quick Links</h5>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {nav_links[0].name}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[1].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {nav_links[1].name}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  Connections
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  How it works
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  Testimonals
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={nav_links[3].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {nav_links[3].name}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="list-none">
              <li className="mb-3">
                <h5 className="text-white mb-4">Resources</h5>
              </li>
              <li className="mb-3">
                <Link
                  href={footer_link.resources[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {footer_link.resources[0].name}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={footer_link.resources[1].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {footer_link.resources[1].name}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={footer_link.legal[0].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {footer_link.legal[0].name}
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  href={footer_link.legal[1].href}
                  className="text-neutral-400 transition-colors duration-200 hover:text-[#2A7221]"
                >
                  {footer_link.legal[1].name}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 p-8 text-center">
          &copy; {new Date().getFullYear()} GONAGRI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default ComingSoonFooter;
