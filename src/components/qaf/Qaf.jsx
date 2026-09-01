
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router";

const Qaf = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "What vaccinations does my pet need for daycare?",
            answer:
                "For the safety of all our guests, we require up-to-date Rabies, Distemper (DHPP), and Bordetella vaccinations. We also highly recommend the Canine Influenza vaccine.",
        },
        {
            question: "How long does a full grooming session take?",
            answer:
                "A full grooming session typically takes between 2 to 4 hours, depending on the size of your pet, their coat condition, and the specific services requested. We will give you a more accurate estimate at drop-off.",
        },
        {
            question: "Do you offer emergency veterinary services?",
            answer:
                "While we handle urgent care during our regular business hours, we refer after-hours emergencies to the 24/7 Pet Emergency Hospital located just 10 minutes from our clinic.",
        },
        {
            question: "Can I tour the facility before booking?",
            answer:
                "Absolutely! We love showing off our clean, happy environment. Tours are available Monday through Friday between 10am and 2pm. No appointment necessary!",
        },
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
            <section
                id="common_questions"
                className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
            >
                <div className="max-w-3xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h1
                            className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-[#7C9D96]
                mb-5
                sm:mb-6
                leading-tight
              "
                        >
                            Common{" "}
                            <span className="text-[#F29727]">
                                Questions.
                            </span>
                        </h1>

                        <p
                            className="
                text-base
                sm:text-lg
                lg:text-xl
                text-[#7C9D96]/60
                font-medium
                leading-relaxed
                max-w-2xl
                mx-auto
              "
                        >
                            Everything you need to know about our care services.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4 sm:space-y-6">
                        {questions.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="
                    bg-white
                    rounded-[25px]
                    sm:rounded-[30px]
                    overflow-hidden
                    border
                    border-white/50
                    shadow-[12px_12px_30px_rgba(0,0,0,0.05),-12px_-12px_30px_rgba(255,255,255,0.8)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                                >
                                    {/* Question Button */}
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        className="
                      w-full
                      p-5
                      sm:p-7
                      md:p-8
                      flex
                      items-center
                      justify-between
                      gap-4
                      text-left
                      cursor-pointer
                      focus:outline-none
                    "
                                    >
                                        <h3
                                            className="
                        text-base
                        sm:text-lg
                        md:text-xl
                        font-bold
                        text-[#7C9D96]
                        leading-relaxed
                      "
                                        >
                                            {item.question}
                                        </h3>

                                        <ChevronDown
                                            className={`
                        shrink-0
                        w-5
                        h-5
                        sm:w-6
                        sm:h-6
                        text-[#F29727]
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                                        />
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`
                      grid
                      transition-all
                      duration-300
                      ease-in-out
                      ${isOpen
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }
                    `}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                className="
                          px-5
                          sm:px-7
                          md:px-8
                          pb-5
                          sm:pb-7
                          md:pb-8
                          text-[#7C9D96]/70
                          text-sm
                          sm:text-base
                          md:text-lg
                          font-medium
                          leading-7
                          sm:leading-relaxed
                        "
                                            >
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div
                        className="
              mt-10
              sm:mt-14
              bg-[#7C9D96]/10
              rounded-[25px]
              sm:rounded-[30px]
              p-6
              sm:p-8
              text-center
            "
                    >
                        <h2
                            className="
                text-xl
                sm:text-2xl
                font-bold
                text-[#7C9D96]
                mb-3
              "
                        >
                            Still have questions?
                        </h2>

                        <p
                            className="
                text-sm
                sm:text-base
                text-[#7C9D96]/60
                font-medium
                leading-relaxed
              "
                        >
                            Feel free to contact us if you need any additional
                            information about our pet care services.
                        </p>

                        <NavLink
                            to="/contact"
                            className="
                            inline-block
                            mt-5
                            px-6
                            py-3
                             bg-[#F29727]
    text-white
    rounded-2xl
    font-bold
    shadow-[8px_8px_16px_rgba(242,151,39,0.2)]
    hover:scale-105
    active:scale-95
    transition-all
  "
                        >
                            Contact Us
                        </NavLink>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Qaf;
