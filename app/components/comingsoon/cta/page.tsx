import Link from "next/link";
import React from "react";
import nav_links from "@/app/libs/constants/links";

const CTA = () => {
  return (
    <>
      <div className="absolute opacity-[0.1]">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[60px]"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4D03F] rounded-full blur-[60px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center relative z-10">
          <h2 className="text-white mb-6">
            Ready to Transform Your Agri-Business?
          </h2>
          <p className="text-[1.25rem] text-[#f0f7ef] ">
            Join 50,000+ farmers, buyers, and suppliers building the future of
            African agriculture
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8 md:flex-row flex-col">
            <Link
              href={nav_links[4].href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg font-semibold no-underline bg-[#C87D2F] text-white shadow-md transition-all duration-200 hover:bg-[#a16426]"
            >
              {nav_links[4].name}
              <span>→</span>
            </Link>
            <Link
              href={nav_links[2].href}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-lg font-semibold no-underline border-2 border-white text-white transition-all duration-200 hover:bg-[#ffffff1a] hover:text-white"
            >
              {nav_links[2].name}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
