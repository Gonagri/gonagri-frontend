"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import img from "@/public/images/contactImg.jpeg";

import { Mail, Phone, MapPin, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { useSubmitContactMessage } from "../../../libs/api/contact";
import { getApiErrorMessage } from "../../../libs/api/errors";

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);

  const submitContactMutation = useSubmitContactMessage();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return;
    }

    setError(null);

    try {
      await submitContactMutation.mutateAsync({ name, email, message });

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (mutationError) {
      const messageText = getApiErrorMessage(mutationError);
      setError(messageText);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 font-bold text-black leading-4 text-[2.75rem]">
            Get In Touch
          </h2>
          <p className="text-xl text-[#4b5563] mb-4 leading-[1.7]">
            Have questions? Want to learn more about GONAGRI? We&apos;re here to
            help you get connected.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#d9ecd6] rounded-xl flex items-center justify-center text-[#225c1a] shrink-0">
                <Mail />
              </div>
              <div>
                <h5 className="mb-1">Email Us</h5>
                <Link href="mailto:hello@gonagri.com">hello@gonagri.com</Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#d9ecd6] rounded-xl flex items-center justify-center text-[#225c1a] shrink-0">
                <Phone />
              </div>
              <div>
                <h5 className="mb-1">Call Us</h5>
                <Link href="tel:+234XXXXXXXXX">+234 XXX XXX XXXX</Link>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#d9ecd6] rounded-xl flex items-center justify-center text-[#225c1a] shrink-0">
                <MapPin />
              </div>
              <div>
                <h5 className="mb-1">Visit Us</h5>
                <p className="mb-2 m-0">
                  Lagos,Nigeria <br /> Across 15 Countries
                </p>
              </div>
            </div>
          </div>
          <Image
            src={img}
            alt={""}
            className="mt-8 rounded-2xl shadow-xl w-full h-64 object-cover"
          />
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-md transition-all duration-300">
          {!showSuccess && (
            <div>
              <h3 className="mb-4 text-2xl text-black font-bold leading-[1.2]">
                Send Us a Message
              </h3>
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[#374151] font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg text-base outline-none transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#225c1a] focus:border-[#225c1a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[#374151] font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg text-base outline-none transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#225c1a] focus:border-[#225c1a]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[#374151] font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your agri-business..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg text-base outline-none transition-all duration-200 resize-y min-h-37.5 focus:outline-none focus:ring-1 focus:ring-[#225c1a] focus:border-[#225c1a]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitContactMutation.isPending}
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 text-lg font-semibold rounded-lg bg-[#2A7221] text-white transition-all duration-300 hover:bg-[#225c1a] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitContactMutation.isPending ? "Sending..." : "Send Message"}{" "}
                  <span>→</span>
                </button>
              </form>
              {error && (
                <p className="mt-4 text-sm text-red-600">{error}</p>
              )}
            </div>
          )}

          {/* SUCCESS MESSAGE */}
          {showSuccess && (
            <div className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-green-100
                            flex items-center justify-center text-green-600"
                >
                  <CircleCheckBig />
                </div>
              </div>

              <h3 className="mb-4 text-xl font-semibold text-green-700">
                Message Sent!
              </h3>

              <p className="text-neutral-600">
                Thank you for reaching out. We&apos;ll get back to you within 24
                hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
