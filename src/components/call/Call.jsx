import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Call = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setLoading(false);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Could not connect to server. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
      <section id="say_hello" className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Content */}
            <div>
              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7C9D96] mb-6 md:mb-8 leading-tight">
                Say{" "}
                <span className="text-[#F29727]">
                  Hello!
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-[#7C9D96]/70 font-medium mb-10 md:mb-12 max-w-md leading-relaxed">
                Have a question or want to book a tour? We're here to help you
                and your pet.
              </p>

              {/* Contact Information */}
              <div className="space-y-7 md:space-y-8">

                {/* Email */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F29727]/10 rounded-2xl flex items-center justify-center text-[#F29727] shrink-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7C9D96]/40 mb-1">
                      Email Us
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-bold break-all text-[#7C9D96]">
                      mfahadjaved205@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#7C9D96]/10 rounded-2xl flex items-center justify-center text-[#7C9D96] shrink-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7C9D96]/40 mb-1">
                      Visit Us
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-bold text-[#7C9D96]">
                      123 Pet Lane, Faisalabad
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#E77B72]/10 rounded-2xl flex items-center justify-center text-[#E77B72] shrink-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7C9D96]/40 mb-1">
                      Call Us
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-bold text-[#7C9D96]">
                      +92 3218828703
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-12 md:mt-20 bg-[#7C9D96] text-white rounded-[30px] p-6 sm:p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.08),-10px_-10px_30px_rgba(255,255,255,0.6)]">
                <h3 className="text-2xl font-bold mb-5">
                  Opening Hours
                </h3>

                <div className="space-y-3 font-medium opacity-90">
                  <div className="flex justify-between gap-4">
                    <span>Mon - Fri</span>
                    <span className="text-right">
                      8:00 AM - 7:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Saturday</span>
                    <span className="text-right">
                      9:00 AM - 5:00 PM
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Sunday</span>
                    <span className="text-right">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[30px] md:rounded-[40px] p-6 sm:p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
              >

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 md:px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none text-[#7C9D96] placeholder:text-[#7C9D96]/40 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:ring-2 focus:ring-[#7C9D96] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-5 md:px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none text-[#7C9D96] placeholder:text-[#7C9D96]/40 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:ring-2 focus:ring-[#7C9D96] transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full px-5 md:px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none text-[#7C9D96] placeholder:text-[#7C9D96]/40 h-36 md:h-40 resize-none shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] focus:ring-2 focus:ring-[#7C9D96] transition-all"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 text-red-600 rounded-2xl px-5 py-4 font-semibold">
                    {error}
                  </div>
                )}

                {/* Success Message */}
                {submitted && (
                  <div className="bg-[#7C9D96]/10 text-[#7C9D96] rounded-2xl px-5 py-4 font-semibold">
                    Your message has been sent successfully!
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 md:py-5 bg-[#F29727] text-white rounded-[25px] font-bold text-base md:text-lg shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Call;
