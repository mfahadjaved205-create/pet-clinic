import React from "react";
import { Heart, Star } from "lucide-react";
import { NavLink } from "react-router";

/* ---------------- Google Font ---------------- */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

    .font-display {
      font-family: 'Fredoka', sans-serif;
    }

    .font-body {
      font-family: 'Poppins', sans-serif;
    }
  `}</style>
);

/* ---------------- Hero ---------------- */
const Hero = () => {
  return (
    <>
      <Fonts />

      <section
        id="hero"
        className="
          relative
          min-h-screen
          flex
          items-center
          pt-28
          pb-20
          sm:pt-28
          sm:pb-24
          lg:pt-32
          lg:pb-24
          overflow-hidden
          bg-[#F4EEE1]
        "
      >
        {/* Decorative Blobs */}
        <div
          className="
            absolute
            top-20
            left-0
            sm:left-10
            w-40
            h-40
            sm:w-64
            sm:h-64
            bg-[#F2A22C]/10
            rounded-full
            blur-3xl
            -z-10
          "
        ></div>

        <div
          className="
            absolute
            bottom-20
            right-0
            sm:right-10
            w-56
            h-56
            sm:w-96
            sm:h-96
            bg-[#71877B]/10
            rounded-full
            blur-3xl
            -z-10
          "
        ></div>

        {/* Main Container */}
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            sm:gap-14
            lg:gap-16
            items-center
          "
        >
          {/* =========================
              Left Content
          ========================= */}
          <div
            className="
              space-y-5
              sm:space-y-7
              text-center
              lg:text-left
              mt-0
              lg:mt-8
              ml-0
            "
          >
            {/* Trust Badge */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                sm:px-6
                py-2.5
                sm:py-3
                bg-white
                rounded-2xl
                shadow-md
                max-w-full
              "
            >
              <Heart
                className="
                  text-[#E8604D]
                  w-4
                  h-4
                  fill-[#E8604D]
                  shrink-0
                "
              />

              <span
                className="
                  font-body
                  text-[10px]
                  xs:text-[11px]
                  sm:text-[13px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-[#71877B]
                "
              >
                Trusted by 5,000+ Pet Parents
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-display
                font-semibold
                text-[38px]
                sm:text-[48px]
                md:text-[56px]
                lg:text-[64px]
                xl:text-[68px]
                leading-tight
                text-[#71877B]
              "
            >
              Happy Pets,
              <br />

              <span className="text-[#F2A22C]">
                Happy Hearts.
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className="
                font-body
                text-[14px]
                sm:text-[16px]
                lg:text-[18px]
                font-medium
                w-full
                max-w-xl
                lg:max-w-lg
                leading-relaxed
                text-[#71877B]/70
                mx-auto
                lg:mx-0
              "
            >
              From expert grooming to compassionate veterinary care, we provide
              everything your furry friend needs to thrive in a soft,
              stress-free environment.
            </p>

            {/* Buttons */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                lg:justify-start
                gap-3
                sm:gap-5
                pt-2
              "
            >
              {/* Book a Visit */}
              <NavLink
                to="/booking"
                className="
                  font-body
                  px-6
                  sm:px-9
                  py-3
                  sm:py-4
                  bg-[#F2A22C]
                  text-white
                  rounded-3xl
                  font-bold
                  text-[13px]
                  sm:text-[16px]
                  shadow-lg
                  hover:scale-105
                  active:scale-95
                  transition-transform
                  whitespace-nowrap
                "
              >
                Book a Visit
              </NavLink>

              {/* Our Services */}
              <NavLink
                to="/servicesnav"
                className="
                  font-body
                  px-6
                  sm:px-9
                  py-3
                  sm:py-4
                  bg-white
                  text-[#71877B]
                  rounded-3xl
                  font-bold
                  text-[13px]
                  sm:text-[16px]
                  shadow-md
                  hover:scale-105
                  active:scale-95
                  transition-transform
                  whitespace-nowrap
                "
              >
                Our Services
              </NavLink>
            </div>
          </div>

          {/* =========================
              Right Image
          ========================= */}
          <div
            className="
              relative
              mt-2
              sm:mt-8
              lg:mt-0
              w-full
              max-w-2xl
              mx-auto
              px-2
              sm:px-4
              lg:px-0
            "
          >
            {/* Image Card */}
            <div
              className="
                bg-white
                rounded-3xl
                p-3
                sm:p-5
                rotate-2
                lg:rotate-3
                hover:rotate-0
                transition-transform
                duration-500
                shadow-xl
                mr-0
                mt-0
              "
            >
              <img
                className="
                  rounded-2xl
                  w-full
                  h-64
                  sm:h-80
                  md:h-96
                  lg:h-430px
                  xl:h-470px
                  object-cover
                "
                alt="Happy Dog"
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000"
              />
            </div>

            {/* =========================
                Floating Star
            ========================= */}
            <div
              className="
                absolute
                top-0
                right-0
                sm:-top-5
                sm:-right-3
                lg:-top-6
                lg:-right-4
                bg-[#FBEDEA]
                rounded-2xl
                sm:rounded-3xl
                p-2.5
                sm:p-4
                shadow-lg
                animate-bounce
                mt-2
                mr-0
                sm:mr-1
                lg:mr-0
              "
            >
              <div
                className="
                  w-9
                  h-9
                  sm:w-14
                  sm:h-14
                  bg-[#E8604D]/10
                  rounded-xl
                  sm:rounded-2xl
                  flex
                  items-center
                  justify-center
                "
              >
                <Star
                  className="
                    text-[#E8604D]
                    w-5
                    h-5
                    sm:w-8
                    sm:h-8
                    fill-[#E8604D]
                  "
                />
              </div>
            </div>

            {/* =========================
                Rating Card
            ========================= */}
            <div
              className="
                absolute
                -bottom-5
                left-1/2
                -translate-x-1/2
                sm:left-3
                sm:translate-x-0
                lg:-left-8
                rounded-full
                bg-white
                p-3
                sm:p-5
                flex
                items-center
                gap-2
                sm:gap-4
                shadow-xl
                whitespace-nowrap
                max-w-[90%]
              "
            >
              {/* Avatars */}
              <div className="flex -space-x-2 sm:-space-x-3">
                <img
                  className="
                    w-7
                    h-7
                    sm:w-10
                    sm:h-10
                    rounded-full
                    border-2
                    border-white
                  "
                  src="https://i.pravatar.cc/100?u=1"
                  alt="Pet parent"
                />

                <img
                  className="
                    w-7
                    h-7
                    sm:w-10
                    sm:h-10
                    rounded-full
                    border-2
                    border-white
                  "
                  src="https://i.pravatar.cc/100?u=2"
                  alt="Pet parent"
                />

                <img
                  className="
                    w-7
                    h-7
                    sm:w-10
                    sm:h-10
                    rounded-full
                    border-2
                    border-white
                  "
                  src="https://i.pravatar.cc/100?u=3"
                  alt="Pet parent"
                />
              </div>

              {/* Rating Text */}
              <div>
                <p
                  className="
                    font-body
                    text-[9px]
                    sm:text-[11px]
                    font-bold
                    text-[#71877B]/40
                    uppercase
                    tracking-wide
                  "
                >
                  Rating
                </p>

                <p
                  className="
                    font-body
                    text-[12px]
                    sm:text-[15px]
                    font-bold
                    text-[#71877B]
                  "
                >
                  4.9/5 Stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;