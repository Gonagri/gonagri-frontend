import Link from "next/link";
import { nav_links } from "@/app/libs/constants/links";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? "max-h-125 opacity-100 animate-fadeIn" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-6 py-6 border-t border-neutral-200 bg-white">
        <ul className="flex flex-col gap-6">
          {nav_links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block text-neutral-700 font-medium no-underline transition-colors duration-200 hover:text-[#225c1a]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href={nav_links[4].href}
          onClick={onClose}
          className="mt-6 inline-flex items-center justify-center w-full gap-3 px-6 py-3 rounded-lg bg-[#2A7221] text-white font-semibold no-underline hover:bg-[#225c1a] transition-colors duration-200"
        >
          {nav_links[4].name}
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
