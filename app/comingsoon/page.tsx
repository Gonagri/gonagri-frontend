import React from "react";
import ComingSoonHeader from "../components/comingsoon/Header";
import ComingSoonFooter from "../components/comingsoon/Footer";
import Hero from "../components/comingsoon/Hero/page";
import About from "../components/comingsoon/about/page";

const ComingSoon = () => {
  return (
    <>
      <ComingSoonHeader />
      <main>
        {/* Home */}
        <section id="home">
          <Hero />
        </section>
        {/* Status Section */}
        <section
          id="status"
          className="py-12 md:py-16 bg-linear-to-br from-[#225c1a] via-[#1b4715] to-[#225c1a] text-white"
        >
          <div className="max-w-7xl mx-auto p-0 px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-medium text-[3rem] mb-2">0</div>
                <div className="text-white">Active Users</div>
              </div>
              <div>
                <div className="font-medium text-[3rem] mb-2">0</div>
                <div className="text-white">Countries</div>
              </div>
              <div>
                <div className="font-medium text-[3rem] mb-2">$0</div>
                <div className="text-white">Revenue</div>
              </div>
              <div>
                <div className="font-medium text-[3rem] mb-2">0%</div>
                <div className="text-white">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* About  */}
        <section id="about" className="py-12 md:py-16">
          <About />
        </section>
      </main>
      <ComingSoonFooter />
    </>
  );
};

export default ComingSoon;
