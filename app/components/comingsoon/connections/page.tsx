import React from "react";
import Link from "next/link";
//Icons
import { Users, CirclePlus, ChartNoAxesColumn } from "lucide-react";
//Constants
import { nav_links } from "@/app/libs/constants/links";

const Connections = () => {
  return (
    <div className="max-w-7xl mx-auto p-0 px-6">
      <div className="text-center mb-16">
        <h2 className="mb-6 md:text-4xl">
          Connect With Every Part of the Value Chain
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-0 leading-[1.7]">
          GONAGRI brings together all stakeholders in African agriculture. Build
          the connections you need to grow your business.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer">
          <div className=" absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mt-16 -mr-16 transition-transform duration-700 group-hover:scale-150 bg-linear-to-br from-[#2A7221] to-[#225c1a]"></div>
          <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
            <Users className="w-12 h-12 fill-none stroke-[#2A7221]" />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Farmers & Producers</h3>
          <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
            Connect directly with verified farmers and agricultural producers
            across Africa. Access fresh produce and build lasting partnerships.
          </p>
          <Link
            href={nav_links[3].href}
            className="flex items-center gap-2 text-[#225c1a] font-semibold no-underline mt-6 transition-[gap] duration-300 hover:gap-3"
          >
            <span> Learn More</span>
            <span>→</span>
          </Link>
        </div>

        <div className=" group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer">
          <div className=" absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mt-16 -mr-16 transition-transform duration-700 group-hover:scale-150 bg-linear-to-br from-[#c3a632] to-[#927d26]"></div>
          <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
            <Users className="w-12 h-12 fill-none stroke-[#C87D2F]" />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Buyers & Distributors</h3>
          <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
            Link with reliable buyers and distribution networks. Scale your
            reach and ensure your products get to market efficiently.
          </p>
          <Link
            href={nav_links[3].href}
            className="flex items-center gap-2 text-[#225c1a] font-semibold no-underline mt-6 transition-[gap] duration-300 hover:gap-3"
          >
            <span> Learn More</span>
            <span>→</span>
          </Link>
        </div>

        <div className=" group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer">
          <div className=" absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mt-16 -mr-16 transition-transform duration-700 group-hover:scale-150 bg-linear-to-br from-[#c3a632] to-[#927d26]"></div>
          <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
            <CirclePlus className="w-12 h-12 fill-none stroke-[#C87D2F]" />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Suppliers & Partners</h3>
          <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
            Build networks with input suppliers, logistics partners, and
            agri-tech providers. Everything you need in one ecosystem.
          </p>
          <Link
            href={nav_links[3].href}
            className="flex items-center gap-2 text-[#225c1a] font-semibold no-underline mt-6 transition-[gap] duration-300 hover:gap-3"
          >
            <span> Learn More</span>
            <span>→</span>
          </Link>
        </div>

        <div className=" group bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer">
          <div className=" absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -mt-16 -mr-16 transition-transform duration-700 group-hover:scale-150 bg-linear-to-br from-[#2A7221] to-[#225c1a]"></div>
          <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
            <ChartNoAxesColumn className="w-12 h-12 fill-none stroke-[#2A7221]" />
          </div>
          <h3 style={{ marginBottom: "1rem" }}>Market Intelligence</h3>
          <p style={{ color: "#4b5563", marginBottom: "1.5rem" }}>
            Access real-time market data, pricing trends, and demand forecasts.
            Make informed business decisions with confidence.
          </p>
          <Link
            href={nav_links[3].href}
            className="flex items-center gap-2 text-[#225c1a] font-semibold no-underline mt-6 transition-[gap] duration-300 hover:gap-3"
          >
            <span> Learn More</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connections;
