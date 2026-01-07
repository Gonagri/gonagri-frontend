import React from "react";
import Link from "next/link";
import ComingSoonHeader from "../components/comingsoon/Header";
import ComingSoonFooter from "../components/comingsoon/Footer";
import Hero from "../components/comingsoon/Hero/page";
import About from "../components/comingsoon/about/page";
import Connections from "../components/comingsoon/connections/page";
import nav_links from "../libs/constants/links";
import CTA from "../components/comingsoon/cta/page";
import Contact from "../components/comingsoon/contact/page";

//Icons

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

        {/* Connections */}
        <section
          id="connections"
          className="py-16 md:py-24 bg-(--color-neutral-50) bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(42,114,33,0.03)_35px,rgba(42,114,33,0.03)_70px)]"
        >
          <Connections />
        </section>

        {/* How it works */}
        <section className="p-24 px-0">
          <div className="max-w-7xl m-0 mx-auto p-0 px-6">
            <div className="text-center mb-16">
              <h2 className="mb-6 text-5xl font-semibold">How GONAGRI Works</h2>
              <p className="text-[1.25rem] text-neutral-600 max-w-3xl m-0 mx-auto">
                Getting started is simple. Follow these four steps to transform
                your agri-business.
              </p>
            </div>
            <div className="steps-grid relative">
              <div className="grid grid-cols-4 gap-8">
                <div className="h-full border-t-4 border-t-[#2a7221] bg-white cursor-pointer rounded-2xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transform transition-all duration-300">
                  <div className="text-[4rem] text-transparent bg-[linear-gradient(135deg,#225c1a,#c3a632)] bg-clip-text opacity-[0.2] mb-4">
                    01
                  </div>
                  <h4
                    style={{ marginBottom: "0.75rem" }}
                    className="font-bold leading-[1.2] text-[#111827] text-2xl"
                  >
                    Create Your Profile
                  </h4>
                  <p style={{ color: "#4b5563" }} className="leading-[1.7]">
                    Sign up and tell us about your agricultural business.
                    Whether you&aspos;re a farmer, buyer, or supplier, we have a
                    place for you.
                  </p>
                </div>
                <div className="h-full border-t-4 border-t-[#2a7221] bg-white cursor-pointer rounded-2xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transform transition-all duration-300">
                  <div className="text-[4rem] text-transparent bg-[linear-gradient(135deg,#225c1a,#c3a632)] bg-clip-text opacity-[0.2] mb-4">
                    02
                  </div>
                  <h4
                    style={{ marginBottom: "0.75rem" }}
                    className="font-bold leading-[1.2] text-[#111827] text-2xl"
                  >
                    Discover Connections
                  </h4>
                  <p style={{ color: "#4b5563" }} className="leading-[1.7]">
                    Browse verified profiles, explore market opportunities, and
                    find the perfect partners for your business needs.
                  </p>
                </div>
                <div className="h-full border-t-4 border-t-[#2a7221] bg-white cursor-pointer rounded-2xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transform transition-all duration-300">
                  <div className="text-[4rem] text-transparent bg-[linear-gradient(135deg,#225c1a,#c3a632)] bg-clip-text opacity-[0.2] mb-4">
                    03
                  </div>
                  <h4
                    style={{ marginBottom: "0.75rem" }}
                    className="font-bold leading-[1.2] text-[#111827] text-2xl"
                  >
                    Start Trading
                  </h4>
                  <p style={{ color: "#4b5563" }} className="leading-[1.7]">
                    Initiate conversations, negotiate deals, and build lasting
                    business relationships that grow your agricultural
                    enterprise.
                  </p>
                </div>
                <div className="h-full border-t-4 border-t-[#2a7221] bg-white cursor-pointer rounded-2xl p-8 shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.1)] hover:-translate-y-1 transform transition-all duration-300">
                  <div className="text-[4rem] text-transparent bg-[linear-gradient(135deg,#225c1a,#c3a632)] bg-clip-text opacity-[0.2] mb-4">
                    04
                  </div>
                  <h4
                    style={{ marginBottom: "0.75rem" }}
                    className="font-bold leading-[1.2] text-[#111827] text-2xl"
                  >
                    Grow Together
                  </h4>
                  <p style={{ color: "#4b5563" }} className="leading-[1.7]">
                    Track your growth, expand your network, and access resources
                    that help your agri-business thrive in a connected
                    ecosystem.
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Link
                  href={nav_links[3].href}
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 text-lg font-semibold rounded-lg transition-all duration-200 no-underline bg-[#2A7221] text-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_10px_rgba(0,0,0,0.12)]"
                >
                  {nav_links[3].name}
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 bg-linear-to-br from-[#225c1a] via-[#1b4715] to-[#143710] text-white">
          <CTA />
        </section>

        {/* Contact */}
        <section className="py-16 md:py-24" id="contact">
          <Contact />
        </section>
      </main>
      <ComingSoonFooter />
    </>
  );
};

export default ComingSoon;
