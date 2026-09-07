import React, { useState } from "react";
import { NavLink } from "react-router";

/* ---------------- Paw Icon ---------------- */
const PawPrintIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`block ${className}`}
  >
    <circle cx="11" cy="4" r="2" />
    <circle cx="18" cy="8" r="2" />
    <circle cx="20" cy="16" r="2" />
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
  </svg>
);

/* ---------------- Instagram Icon ---------------- */
const InstagramIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`block ${className}`}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* ---------------- Facebook Icon ---------------- */
const FacebookIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`block ${className}`}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* ---------------- Twitter Icon ---------------- */
const TwitterIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`block ${className}`}
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

/* ---------------- Footer ---------------- */
const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!email) {
      setMessage("Please enter your email.");
      setIsError(true);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Something went wrong. Please try again.");
        setIsError(true);
        setLoading(false);
        return;
      }

      setMessage(data.message || "Thank you for subscribing!");
      setIsError(false);
      setEmail("");
      setLoading(false);
    } catch (err) {
      setMessage("Could not connect to server. Please try again.");
      setIsError(true);
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white pt-24 pb-12 px-6 rounded-t-3xl shadow-lg">

      <div className="max-w-7xl mx-auto">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* About */}
          <div className="space-y-6">

            <NavLink
              to="/"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-[#7C9D96] rounded-2xl flex items-center justify-center shadow-inner">

                <PawPrintIcon className="w-6 h-6 text-white" />

              </div>

              <span className="text-2xl font-bold text-[#7C9D96]">
                Pet Clinic
              </span>
            </NavLink>

            <p className="text-[#7C9D96]/60 font-medium">
              Providing gentle, loving care for your furry family members
              since 2015. Your pet's happiness is our priority.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="https://www.instagram.com/?hl=en"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              <a
                href="https://www.facebook.com/"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>

              <a
                href="https://x.com/"
                aria-label="Twitter"
                className="w-10 h-10 bg-[#F7F1E5] rounded-xl flex items-center justify-center text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white transition-all"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#7C9D96] mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4">

              <li>
                <NavLink
                  to="/servicesnav"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Our Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/booking"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Book Appointment
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Pet Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Pet Care Blog
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-[#7C9D96] mb-6">
              Support
            </h4>

            <ul className="space-y-4">

              <li>
                <NavLink
                  to="/faq"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  FAQs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/prime"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/ten"
                  className="text-[#7C9D96]/60 hover:text-[#7C9D96] font-medium transition-colors"
                >
                  Terms of Service
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h4 className="text-lg font-bold text-[#7C9D96] mb-6">
              Newsletter
            </h4>

            <p className="text-sm text-[#7C9D96]/60 mb-4 font-medium">
              Get pet care tips and special offers!
            </p>

            <form
              onSubmit={handleSubscribe}
              className="space-y-3"
            >

              <input
                className="w-full px-4 py-3 bg-[#F7F1E5] rounded-2xl focus:ring-2 focus:ring-[#7C9D96] outline-none"
                placeholder="Your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#7C9D96] text-white rounded-2xl font-bold hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>

            </form>

            {message && (
              <p
                className={`mt-3 text-sm font-semibold ${
                  isError ? "text-red-600" : "text-[#7C9D96]"
                }`}
              >
                {message}
              </p>
            )}

          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#7C9D96]/10 text-center">

          <p className="text-[#7C9D96]/40 text-sm font-medium">
            © 2024 Pawsitive Care. All rights reserved. Made with love for
            pets.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;