import React from "react";
import Image from "next/image";
//Components
import HeroEmailForm from "../HeroEmailForm";
//Icon
import { CircleCheckBig } from "lucide-react";

//
import HeroImage from "@/public/images/comingsoonImgHero.jpeg";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="pt-40 pb-24 relative overflow-hidden bg-linear-to-br from-[#f0f7ef] via-white to-[#fffef0]"
      >
        {/* Background floating circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {/* Circle 1 */}
          <div
            className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#2A7221] blur-[60px]"
            style={{ animation: "float 3s ease-in-out infinite" }}
          ></div>

          {/* Circle 2 */}
          <div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#F4D03F] blur-[60px]"
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          ></div>

          {/* Circle 3 */}
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-[#dc9a47] blur-[60px]"
            style={{
              animation: "float 3s ease-in-out infinite",
              animationDelay: "2s",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
            {/* Hero Content */}
            <div
              className="space-y-6"
              style={{ animation: "slideInLeft 0.8s ease-out" }}
            >
              {/* Hero Badge */}
              <div className="inline-flex items-center gap-2.5 bg-linear-to-br from-[#2A7221] to-[#225c1a] text-white px-5 py-2 rounded-full mb-8 shadow-md">
                {/* Pulse Dot */}
                <span className="relative w-3 h-3">
                  <span
                    className="absolute w-full h-full bg-white rounded-full"
                    style={{
                      animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
                    }}
                  ></span>
                  <span className="absolute w-full h-full bg-white rounded-full"></span>
                </span>
                <span>Building Africa&apos;s Agri-Business Future</span>
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Connect.
                <br />
                Trade.
                <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-[#2A7221] to-[#F4D03F]">
                  Grow Together.
                </span>
              </h1>

              {/* Hero Description */}
              <p className="text-xl text-neutral-600 mb-8">
                Join Africa&apos;s premier agri-business network. Connect
                farmers, buyers, suppliers, and partners in one powerful
                ecosystem. Transform your agricultural business today.
              </p>

              {/* Email Form */}
              <HeroEmailForm />

              {/* Hero Features */}
              <div className="flex flex-wrap gap-8 text-neutral-600">
                <div className="flex items-center gap-2.5">
                  <CircleCheckBig className="text-[#2A7221]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CircleCheckBig className="text-[#2A7221]" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CircleCheckBig className="text-[#2A7221]" />
                  <span>50K+ active members</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slideInRight relative">
              <div className="relative rounded-2xl overflow-hidden h-125">
                <div className="absolute -inset-4 bg-linear-to-br from-[#2A7221] to-[#F4D03F] opacity-20 blur-2xl rounded-2xl"></div>
                <Image
                  src={HeroImage}
                  alt="Business partnership handshake"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2A7221]/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
