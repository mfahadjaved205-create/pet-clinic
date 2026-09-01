
import React from "react";
import { Link } from "react-router";

const CTA = () => {
  return (
    <section
      id="ready_to_give_your_pet_the_best_care"
      className="py-32 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #FBF6EC 0%, #F1E9D9 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto rounded-[40px] bg-[#7C9885] p-16 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to give your pet
            <br />
            the best care?
          </h2>

          <p className="text-white/80 text-xl font-medium mb-12 max-w-2xl mx-auto">
            Join the Pawsitive family today and experience the difference of
            compassionate, professional pet care.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Book Now Button */}
            <Link
              to="/booking"
              className="px-12 py-6 bg-white text-[#7C9885] rounded-[30px] font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              Book Now
            </Link>

            {/* Contact Us Button */}
            <Link
              to="/contact"
              className="px-12 py-6 border-2 border-white/30 text-white rounded-[30px] font-bold text-xl hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

