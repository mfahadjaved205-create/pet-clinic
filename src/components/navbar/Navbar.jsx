import React, { useState } from "react";
import { NavLink } from "react-router";
import pic1 from "../../assets/pic1.jpg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  // =========================
  // Desktop Active Link Style
  // =========================
  const navLinkStyle = ({ isActive }) =>
    `text-sm font-bold transition-colors ${
      isActive
        ? "text-[#F29727]"
        : "text-[#7C9D96]/70 hover:text-[#7C9D96]"
    }`;

  // =========================
  // Mobile Active Link Style
  // =========================
  const mobileLinkStyle = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-[#F29727]"
        : "text-[#7C9D96] hover:text-[#F29727]"
    }`;

  return (
    <header>
      {/* =========================
          NAVBAR
      ========================= */}
      <nav
        className="
          fixed
          top-0
          left-0
          w-full
          z-9999
          px-2
          sm:px-3
          md:px-6
          py-3
          md:py-4
        "
      >
        <div
          className="
            w-full
            max-w-7xl
            mx-auto
            bg-white/80
            backdrop-blur-md
            rounded-2xl
            sm:rounded-3xl
            px-3
            sm:px-5
            md:px-8
            py-3
            md:py-4
            flex
            items-center
            justify-between
            gap-2
            sm:gap-4
            shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
            border
            border-white/20
          "
        >
          {/* =========================
              LOGO
          ========================= */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-2
              group
              shrink-0
            "
          >
            <div
              className="
                w-8
                h-8
                sm:w-9
                sm:h-9
                bg-[#7C9D96]
                rounded-xl
                flex
                items-center
                justify-center
                overflow-hidden
                group-hover:scale-110
                transition-transform
                shrink-0
              "
            >
              <img
                src={pic1}
                alt="Pet Clinic"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <span
              className="
                text-base
                sm:text-xl
                md:text-2xl
                font-bold
                text-[#7C9D96]
                tracking-wide
                whitespace-nowrap
              "
            >
              Pet Clinic
            </span>
          </NavLink>

          {/* =========================
              DESKTOP MENU
          ========================= */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-4
              xl:gap-8
              ml-auto
            "
          >
            <NavLink
              to="/"
              className={navLinkStyle}
            >
              Home
            </NavLink>

            <NavLink
              to="/servicesnav"
              className={navLinkStyle}
            >
              Services
            </NavLink>

            <NavLink
              to="/booking"
              className={navLinkStyle}
            >
              Book Now
            </NavLink>

            <NavLink
              to="/shop"
              className={navLinkStyle}
            >
              Shop
            </NavLink>

            <NavLink
              to="/blog"
              className={navLinkStyle}
            >
              Blog
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkStyle}
            >
              About
            </NavLink>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              ml-auto
              shrink-0
            "
          >
            {/* =========================
                DESKTOP BOOK APPOINTMENT
            ========================= */}
            <NavLink
              to="/booking"
              className="
                hidden
                lg:block
                px-4
                xl:px-6
                py-2
                xl:py-3
                text-sm
                xl:text-base
                bg-[#F29727]
                text-white
                rounded-xl
                xl:rounded-2xl
                font-bold
                shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)]
                hover:scale-105
                active:scale-95
                transition-all
                whitespace-nowrap
              "
            >
              Book Appointment
            </NavLink>

            {/* =========================
                MOBILE TOGGLE BUTTON
            ========================= */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
                lg:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-xl
                bg-[#7C9D96]
                text-white
                shadow-md
                cursor-pointer
                z-99999
                transition-all
                hover:scale-105
                active:scale-95
              "
              aria-label="Toggle menu"
            >
              {mobileMenu ? (
                <span className="text-2xl sm:text-3xl font-bold leading-none">
                  ×
                </span>
              ) : (
                <span className="text-xl sm:text-2xl font-bold leading-none">
                  ☰
                </span>
              )}
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET MENU
        ========================= */}
        {mobileMenu && (
          <div
            className="
              lg:hidden
              fixed
              inset-0
              w-full
              h-screen
              bg-[#F7F1E5]
              z-9998
              overflow-y-auto
              px-5
              sm:px-8
              py-6
            "
          >
            {/* =========================
                MOBILE HEADER
            ========================= */}
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              {/* Mobile Logo */}
              <NavLink
                to="/"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    sm:w-10
                    sm:h-10
                    bg-[#7C9D96]
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    overflow-hidden
                  "
                >
                  <img
                    src={pic1}
                    alt="Pet Clinic"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

                <span
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-[#7C9D96]
                  "
                >
                  Pet Clinic
                </span>
              </NavLink>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-xl
                  bg-[#7C9D96]
                  text-white
                  text-2xl
                  sm:text-3xl
                  font-bold
                  cursor-pointer
                  shadow-md
                "
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* =========================
                MOBILE LINKS
            ========================= */}
            <div
              className="
                flex
                flex-col
                gap-5
                sm:gap-6
                mt-10
                text-lg
                sm:text-xl
                font-bold
              "
            >
              <NavLink
                to="/"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Home
              </NavLink>

              <NavLink
                to="/servicesnav"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Services
              </NavLink>

              <NavLink
                to="/booking"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Book Now
              </NavLink>

              <NavLink
                to="/shop"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Shop
              </NavLink>

              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Blog
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={mobileLinkStyle}
              >
                Contact
              </NavLink>

              {/* =========================
                  MOBILE BOOK APPOINTMENT
              ========================= */}
              <NavLink
                to="/booking"
                onClick={closeMenu}
                className="
                  mt-3
                  w-full
                  text-center
                  px-5
                  py-3
                  bg-[#F29727]
                  text-white
                  rounded-2xl
                  font-bold
                  shadow-[8px_8px_16px_rgba(242,151,39,0.2),inset_4px_4px_8px_rgba(255,255,255,0.3)]
                  hover:scale-[1.02]
                  active:scale-95
                  transition-all
                "
              >
                Book Appointment
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;