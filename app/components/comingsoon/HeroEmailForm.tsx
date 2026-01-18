"use client";
import { useState } from "react";

const HeroEmailForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const form = e.currentTarget as HTMLFormElement | null;

    setTimeout(() => {
      setSubmitted(false);
      if (form) {
        form.reset();
      }
    }, 5000);
  };

  return (
    <div>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <input
            type="email"
            id="heroEmail"
            placeholder="Enter your email to get started"
            required
            className="flex-1 px-6 py-3 border-2 border-neutral-300 rounded-lg text-base outline-none focus:border-[#2A7221] focus:ring-4 focus:ring-[#f0f7ef] transition-all"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 cursor-pointer bg-[#2A7221] hover:bg-[#225c1a] text-white rounded-lg font-semibold transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg text-lg"
          >
            Join Network <span>→</span>
          </button>
        </form>
      ) : (
        <div className="flex items-center gap-3 bg-[#ecfdf5] border-2 border-[#10b981] rounded-lg px-6 py-4 mb-8 animate-fadeIn">
          <svg
            className="w-7 h-7 text-[#059669]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span className="text-[#065f46]">
            Welcome to the network! Check your email for next steps.
          </span>
        </div>
      )}
    </div>
  );
};

export default HeroEmailForm;
