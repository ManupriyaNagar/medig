"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to your API
      console.log("Subscribing email:", email);
      setSubscribed(true);
      setEmail("");
      
      // Reset the subscribed state after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="bg-[#71AA49] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-green-100 text-sm sm:text-base mb-4 md:mb-6">
            Get health tips, medication updates, and exclusive offers delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-white  focus:outline-none focus:ring-2 focus:ring-[#2DAAE0]"
              required
            />
            <button
              type="submit"
              className="bg-white  font-medium text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#2DAAE0] transition-colors hover:text-white"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <div className="mt-3 sm:mt-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block text-xs sm:text-sm">
              Thank you for subscribing!
            </div>
          )}

          <div className="mt-4 sm:mt-6 text-green-100 text-xs sm:text-sm">
            <p>
              By subscribing, you agree to our{" "}
              <a href="#" className="text-white underline hover:no-underline">
                Privacy Policy
              </a>
              . We promise not to spam you.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white">Weekly health tips</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white">Exclusive offers</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white">New product alerts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}