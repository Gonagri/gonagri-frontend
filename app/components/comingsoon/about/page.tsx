import React from "react";
import Image from "next/image";
import img1 from "@/public/images/abtImg1.jpeg";
import img2 from "@/public/images/abtImg2.jpeg";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative grid grid-cols-2 gap-4">
          {/* Image 1 */}
          <Image
            src={img1}
            alt="African farmer"
            width={500}
            height={400}
            className="h-64 w-full object-cover rounded-xl shadow-lg"
          />

          {/* Image 2 */}
          <Image
            src={img2}
            alt="Fresh produce"
            width={500}
            height={400}
            className="h-64 w-full object-cover rounded-xl shadow-lg mt-8"
          />

          {/* Gradient decorative block */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl bg-linear-to-br from-[#F4D03F] to-[#C87D2F] -z-10" />
        </div>
        <div>
          <h2 className="mb-6 text-3xl font-bold">
            Revolutionizing African Agri-Business
          </h2>

          <p className="mb-6 text-lg text-neutral-600">
            GONAGRI is more than a platform – it&apos;s a movement to transform
            agricultural commerce across Africa. We&apos;re building bridges
            between farmers, buyers, suppliers, and partners to create a
            thriving, connected ecosystem.
          </p>

          <p className="mb-8 text-lg text-neutral-600">
            Our mission is simple: empower every agricultural business with the
            connections, tools, and market access they need to succeed in the
            modern economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
