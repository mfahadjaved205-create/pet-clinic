
import React, { useEffect, useState } from "react";
import { PawPrint, ArrowUp } from "lucide-react";

const Shun = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // =========================
  // Scroll Event
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);

      const sections = [
        "booking-cancellations",
        "pet-health-safety",
        "vaccination-requirements",
        "liability",
      ];

      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 180;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Scroll To Section
  // =========================
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =========================
  // Scroll To Top
  // =========================
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // Terms Data
  // =========================
  const terms = [
    {
      id: "booking-cancellations",
      number: "1.",
      title: "Booking & Cancellations",
      text: "Appointments must be cancelled at least 24 hours in advance. Late cancellations may be subject to a fee.",
    },
    {
      id: "pet-health-safety",
      number: "2.",
      title: "Pet Health & Safety",
      text: "Owners must disclose any known health issues or behavioral tendencies. We reserve the right to refuse service if a pet poses a safety risk.",
    },
    {
      id: "vaccination-requirements",
      number: "3.",
      title: "Vaccination Requirements",
      text: "All pets must be up-to-date on required vaccinations for daycare and grooming services.",
    },
    {
      id: "liability",
      number: "4.",
      title: "Liability",
      text: "While we take every precaution, Pawsitive Care is not liable for pre-existing conditions or incidents beyond our reasonable control.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">

      {/* =========================
          Main Content
      ========================= */}
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-20 px-4 sm:px-6">

        <section id="terms_of_service">

          <div className="max-w-4xl mx-auto">

            {/* =========================
                Page Header
            ========================= */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-14 mt-10">

              {/* Paw Icon */}
              <div
                className="
                  mx-auto
                  mb-5
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  bg-[#7C9D96]
                  rounded-[22px]
                  flex
                  items-center
                  justify-center
                  shadow-[inset_5px_5px_10px_rgba(0,0,0,0.1),inset_-5px_-5px_10px_rgba(255,255,255,0.2)]
                "
              >
                <PawPrint
                  className="text-white w-8 h-8 sm:w-10 sm:h-10"
                  strokeWidth={2}
                />
              </div>

              <h1
                className="
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  leading-tight
                  text-[#7C9D96]
                "
              >
                Terms of{" "}
                <span className="text-[#F29727]">
                  Service.
                </span>
              </h1>

              <p
                className="
                  mt-4
                  max-w-2xl
                  mx-auto
                  text-sm
                  sm:text-base
                  text-[#7C9D96]/60
                  font-medium
                  leading-relaxed
                "
              >
                Please read our terms and conditions carefully before
                booking any of our pet care services.
              </p>
            </div>

            {/* =========================
                Quick Navigation
            ========================= */}
            <div
              className="
                mb-8
                bg-white/70
                backdrop-blur-md
                rounded-[25px]
                p-4
                sm:p-5
                shadow-[10px_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.7)]
                border
                border-white/50
              "
            >
              <p className="font-bold text-[#7C9D96] mb-3 text-sm sm:text-base">
                Quick Navigation
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                {terms.map((term) => (
                  <button
                    key={term.id}
                    onClick={() => scrollToSection(term.id)}
                    className={`
                      text-left
                      px-4
                      py-3
                      rounded-xl
                      font-semibold
                      text-sm
                      transition-all
                      duration-300
                      ${
                        activeSection === term.id
                          ? "bg-[#7C9D96] text-white shadow-md"
                          : "bg-[#F7F1E5] text-[#7C9D96] hover:bg-[#7C9D96] hover:text-white"
                      }
                    `}
                  >
                    {term.number} {term.title}
                  </button>
                ))}

              </div>
            </div>

            {/* =========================
                Terms Card
            ========================= */}
            <div
              className="
                bg-white
                rounded-[30px]
                sm:rounded-[40px]
                p-6
                sm:p-8
                md:p-10
                lg:p-12
                space-y-8
                sm:space-y-10
                text-[#7C9D96]/70
                font-medium
                leading-relaxed
                shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
                border
                border-white/50
              "
            >

              {terms.map((term, index) => (
                <section
                  key={term.id}
                  id={term.id}
                  className={`
                    scroll-mt-10
                    ${
                      index !== terms.length - 1
                        ? "pb-8 sm:pb-10 border-b border-[#7C9D96]/10"
                        : ""
                    }
                  `}
                >

                  <div className="flex gap-4">

                    {/* Number */}
                    <div
                      className="
                        shrink-0
                        w-10
                        h-10
                        sm:w-12
                        sm:h-12
                        rounded-2xl
                        bg-[#F7F1E5]
                        text-[#F29727]
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-base
                        sm:text-lg
                        shadow-[inset_3px_3px_6px_rgba(0,0,0,0.05)]
                      "
                    >
                      {term.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      <h2
                        className="
                          text-xl
                          sm:text-2xl
                          lg:text-3xl
                          font-bold
                          text-[#7C9D96]
                          mb-3
                        "
                      >
                        {term.title}
                      </h2>

                      <p
                        className="
                          text-sm
                          sm:text-base
                          lg:text-lg
                          leading-7
                          sm:leading-8
                        "
                      >
                        {term.text}
                      </p>

                    </div>
                  </div>

                </section>
              ))}

            </div>

            {/* =========================
                Last Updated
            ========================= */}
            <div className="text-center mt-8">
              <p className="text-xs sm:text-sm text-[#7C9D96]/50 font-medium">
                Last updated: 2024
              </p>
            </div>

          </div>

        </section>
      </main>

    </div>
  );
};

export default Shun;
