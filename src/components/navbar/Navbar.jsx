import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import pic1 from "../../assets/pic1.jpg";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false); // desktop dropdown toggle
  const [mobileUserMenu, setMobileUserMenu] = useState(false); // mobile dropdown toggle
  const navigate = useNavigate();
  const userMenuRef = useRef(null);

  const token = localStorage.getItem("token");

  // user object se naam nikal rahe hain (agar "user" JSON string ki tarah save hai)
  let userName = "User";
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) userName = storedUser.name;
  } catch (e) {
    // agar parse na ho to default "User" hi rahega
  }

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserMenu(false);
    setMobileUserMenu(false);
    closeMenu();
    navigate("/signin");
  };

  // =========================
  // Outside click pe desktop dropdown close karna
  // =========================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            max-w-90rem
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
            to="/home"
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
            <NavLink to="/home" className={navLinkStyle}>
              Home
            </NavLink>

            <NavLink to="/servicesnav" className={navLinkStyle}>
              Services
            </NavLink>

            <NavLink to="/booking" className={navLinkStyle}>
              Book Now
            </NavLink>

            <NavLink to="/shop" className={navLinkStyle}>
              Shop
            </NavLink>

            <NavLink to="/blog" className={navLinkStyle}>
              Blog
            </NavLink>

            <NavLink to="/about" className={navLinkStyle}>
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
                -translate-x-20
              "
            >
              Book Appointment
            </NavLink>

            {!token ? (
              <>
                {/* =========================
                    DESKTOP SIGN IN
                ========================= */}
                <NavLink
                  to="/signin"
                  className="
                    hidden
                    lg:block
                    text-sm
                    font-bold
                    text-[#7C9D96]/70
                    hover:text-[#7C9D96]
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  Sign In
                </NavLink>

                {/* =========================
                    DESKTOP SIGN UP
                ========================= */}
                <NavLink
                  to="/signup"
                  className="
                    hidden
                    lg:block
                    text-sm
                    font-bold
                    text-[#7C9D96]/70
                    hover:text-[#7C9D96]
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              /* =========================
                  DESKTOP USER ICON + DROPDOWN
              ========================= */
              <div className="hidden lg:block relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserMenu(!userMenu)}
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    bg-[#7C9D96]
                    text-white
                    font-bold
                    shadow-md
                    hover:scale-105
                    active:scale-95
                    transition-all
                    cursor-pointer
                  "
                  aria-label="User menu"
                >
                  {/* Simple user icon (SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
                  </svg>
                </button>

                {userMenu && (
                  <div
                    className="
                      absolute
                      right-0
                      mt-3
                      w-56
                      bg-white
                      rounded-2xl
                      shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                      border
                      border-white/40
                      py-2
                      z-50
                    "
                  >
                    {/* User Name Header */}
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm text-gray-400">Signed in as</p>
                      <p className="text-sm font-bold text-[#7C9D96] truncate">
                        {userName}
                      </p>
                    </div>

                    <NavLink
                      to="/profile"
                      onClick={() => setUserMenu(false)}
                      className="block px-4 py-2 text-sm font-semibold text-[#7C9D96]/80 hover:bg-[#F7F1E5] hover:text-[#7C9D96] transition-colors"
                    >
                      My Profile
                    </NavLink>

                    <NavLink
                      to="/dashboard"
                      onClick={() => setUserMenu(false)}
                      className="block px-4 py-2 text-sm font-semibold text-[#7C9D96]/80 hover:bg-[#F7F1E5] hover:text-[#7C9D96] transition-colors"
                    >
                      Dashboard
                    </NavLink>

                    <NavLink
                      to="/cart"
                      onClick={() => setUserMenu(false)}
                      className="block px-4 py-2 text-sm font-semibold text-[#7C9D96]/80 hover:bg-[#F7F1E5] hover:text-[#7C9D96] transition-colors"
                    >
                      My Orders
                    </NavLink>

                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

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
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <NavLink
                to="/home"
                onClick={closeMenu}
                className="flex items-center gap-2"
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
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-xl sm:text-2xl font-bold text-[#7C9D96]">
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
                to="/home"
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

              {!token ? (
                <>
                  <NavLink
                    to="/signin"
                    onClick={closeMenu}
                    className={mobileLinkStyle}
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    to="/signup"
                    onClick={closeMenu}
                    className={mobileLinkStyle}
                  >
                    Sign Up
                  </NavLink>
                </>
              ) : (
                /* =========================
                    MOBILE USER ICON + DROPDOWN
                ========================= */
                <div className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileUserMenu(!mobileUserMenu)}
                    className="flex items-center gap-3 text-left"
                  >
                    <span
                      className="
                        w-9
                        h-9
                        flex
                        items-center
                        justify-center
                        rounded-full
                        bg-[#7C9D96]
                        text-white
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
                      </svg>
                    </span>
                    <span className="text-[#7C9D96]">{userName}</span>
                  </button>

                  {mobileUserMenu && (
                    <div className="flex flex-col gap-4 mt-4 ml-12 text-base font-semibold">
                      <NavLink
                        to="/profile"
                        onClick={closeMenu}
                        className={mobileLinkStyle}
                      >
                        My Profile
                      </NavLink>
                      <NavLink
                        to="/dashboard"
                        onClick={closeMenu}
                        className={mobileLinkStyle}
                      >
                        Dashboard
                      </NavLink>
                      <NavLink
                        to="/cart"
                        onClick={closeMenu}
                        className={mobileLinkStyle}
                      >
                        My Orders
                      </NavLink>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="text-left text-red-500"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

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