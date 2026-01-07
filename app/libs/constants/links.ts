export interface NavLink {
  name: string;
  href: string;
  isActive: boolean;
  isComingSoon?: boolean;
}

export const nav_links: NavLink[] = [
  {
    name: "Home",
    href: "#home",
    isActive: true,
  },
  {
    name: "Coming Soon",
    href: "/",
    isActive: true,
  },
  {
    name: "About",
    href: "#about",
    isActive: true,
    isComingSoon: true,
  },
  {
    name: "Contact",
    href: "#contact",
    isActive: true,
    isComingSoon: true,
  },
  {
    name: "Get Started",
    href: "#getstarted",
    isActive: true,
    isComingSoon: true,
  },
];

// For the actual app (future use)
export const app_nav_links = {
  farmer: [
    { name: "Dashboard", href: "/farmer/dashboard", icon: "🏠" },
    { name: "Products", href: "/farmer/products", icon: "📦" },
    { name: "Orders", href: "/farmer/orders", icon: "📋" },
    { name: "Wallet", href: "/farmer/wallet", icon: "💰" },
    { name: "Messages", href: "/farmer/messages", icon: "💬" },
  ],
  buyer: [
    { name: "Marketplace", href: "/marketplace", icon: "🛒" },
    { name: "My Orders", href: "/buyer/orders", icon: "📦" },
    { name: "Cart", href: "/buyer/cart", icon: "🛒" },
    { name: "Messages", href: "/buyer/messages", icon: "💬" },
  ],
};

// Footer links
export const footer_link = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Help Center", href: "/help" },
    { name: "Farmers Guide", href: "/guide/farmers" },
    { name: "Buyers Guide", href: "/guide/buyers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default nav_links;