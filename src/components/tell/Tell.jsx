import React, { useState } from "react";
import {
    Heart,
    ShieldCheck,
    Sparkles,
    CheckCircle,
} from "lucide-react";

const Tell = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const coreValues = [
        {
            title: "Compassion First",
            description:
                "We approach every pet with patience, kindness, and a gentle touch.",
            icon: Heart,
            iconColor: "text-[#F27D7D]",
            bgColor: "bg-[#F27D7D]/10",
        },
        {
            title: "Safety Always",
            description:
                "Our facilities are designed for maximum safety and hygiene standards.",
            icon: ShieldCheck,
            iconColor: "text-[#7C9D96]",
            bgColor: "bg-[#7C9D96]/10",
        },
        {
            title: "Excellence",
            description:
                "We continuously train our staff on the latest pet care techniques.",
            icon: Sparkles,
            iconColor: "text-[#F29727]",
            bgColor: "bg-[#F29727]/10",
        },
    ];

    // JavaScript newsletter functionality
    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage("Please enter your email address.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        setMessage("Thank you! You have successfully subscribed.");
        setEmail("");
    };

    // JavaScript card interaction
    const handleValueClick = (index) => {
        setSelectedValue(selectedValue === index ? null : index);
    };

    return (
        <main className="bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased overflow-hidden">

            {/* =========================
          OUR STORY
      ========================== */}
            <section
                id="our_story_paws_with_purpose"
                className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-10">

                    {/* Image */}
                    <div className="relative w-full">
                        <div
                            className="
                bg-white
                rounded-[30px]
                p-3 sm:p-4
                -rotate-2
                shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
              "
                        >
                            <img
                                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800"
                                alt="Our Team"
                                className="
                  rounded-3xl
                  sm:rounded-[30px]
                  w-full
                  aspect-square
                  object-cover
                "
                            />
                        </div>

                        {/* Experience Badge */}
                        <div
                            className="
                absolute
                -bottom-6
                sm:-bottom-10
                right-2
                sm:right-0
                bg-[#F29727]
                text-white
                rounded-[28px]
                p-5
                sm:p-8
                max-w-xs
                sm:max-w-xs
                rotate-3
                shadow-[12px_12px_30px_rgba(242,151,39,0.2)]
              "
                        >
                            <p className="text-xl sm:text-2xl font-bold mb-2">
                                10+ Years
                            </p>

                            <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed">
                                Of making tails wag and hearts happy.
                            </p>
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="space-y-6 sm:space-y-8 mt-10 lg:mt-0">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#7C9D96]">
                            Our Story:
                            <span className="block text-[#F29727] mt-2">
                                Paws with Purpose.
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-[#7C9D96]/70 font-medium leading-relaxed">
                            Founded in 2015, Pawsitive Care began with a simple mission:
                            to provide a pet care experience that feels like home. We
                            believe every pet deserves to be treated with the same love
                            and respect as a family member.
                        </p>

                        <p className="text-base sm:text-lg text-[#7C9D96]/70 font-medium leading-relaxed">
                            Our team of certified groomers, experienced veterinarians,
                            and dedicated animal lovers work together to ensure your
                            pet's physical and emotional well-being.
                        </p>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2">

                            <div
                                className="
                  bg-white
                  rounded-3xl
                  p-5
                  sm:p-6
                  text-center
                  shadow-[12px_12px_30px_rgba(0,0,0,0.04),-8px_-8px_25px_rgba(255,255,255,0.8)]
                  hover:-translate-y-1
                  transition-transform
                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-[#F29727] mb-1">
                                    5k+
                                </p>

                                <p className="text-xs sm:text-sm font-bold text-[#7C9D96]/40 uppercase tracking-wide">
                                    Happy Pets
                                </p>
                            </div>

                            <div
                                className="
                  bg-white
                  rounded-3xl
                  p-5
                  sm:p-6
                  text-center
                  shadow-[12px_12px_30px_rgba(0,0,0,0.04),-8px_-8px_25px_rgba(255,255,255,0.8)]
                  hover:-translate-y-1
                  transition-transform
                "
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-[#7C9D96] mb-1">
                                    12
                                </p>

                                <p className="text-xs sm:text-sm font-bold text-[#7C9D96]/40 uppercase tracking-wide">
                                    Expert Staff
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          CORE VALUES
      ========================== */}
            <section
                id="our_core_values"
                className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 bg-white/30"
            >
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <p className="text-[#F29727] font-bold uppercase tracking-widest text-sm mb-3">
                            What We Believe
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7C9D96]">
                            Our Core Values
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

                        {coreValues.map((value, index) => {
                            const Icon = value.icon;
                            const isSelected = selectedValue === index;

                            return (
                                <div
                                    key={value.title}
                                    onClick={() => handleValueClick(index)}
                                    className={`
                    bg-white
                    rounded-[28px]
                    p-7
                    sm:p-8
                    lg:p-10
                    text-center
                    cursor-pointer
                    shadow-[20px_20px_60px_rgba(0,0,0,0.05),-15px_-15px_50px_rgba(255,255,255,0.8)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-[25px_25px_60px_rgba(0,0,0,0.08),-15px_-15px_50px_rgba(255,255,255,0.9)]
                    ${isSelected
                                            ? "scale-[1.02] ring-2 ring-[#7C9D96]/20"
                                            : ""
                                        }
                  `}
                                >

                                    {/* Icon */}
                                    <div
                                        className={`
                      w-16
                      h-16
                      ${value.bgColor}
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-6
                      shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
                      transition-transform
                      duration-300
                      ${isSelected ? "scale-110 rotate-3" : ""}
                    `}
                                    >
                                        <Icon
                                            className={`${value.iconColor} w-8 h-8`}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#7C9D96] mb-4">
                                        {value.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#7C9D96]/60 font-medium leading-relaxed">
                                        {value.description}
                                    </p>

                                    {/* JavaScript selected state */}
                                    {isSelected && (
                                        <div className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-[#7C9D96]">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>Our Promise</span>
                                        </div>
                                    )}

                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* =========================
          SIMPLE CTA
      ========================== */}
            <section className="px-4 sm:px-6 py-16 sm:py-20">
                <div
                    className="
            max-w-5xl
            mx-auto
            bg-[#7C9D96]
            rounded-[30px]
            sm:rounded-[40px]
            p-8
            sm:p-12
            lg:p-16
            text-center
            text-white
            shadow-[20px_20px_60px_rgba(0,0,0,0.08)]
          "
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
                        Your Pet Deserves the Best
                    </h2>

                    <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
                        We are committed to providing gentle, loving and professional
                        care for every furry family member.
                    </p>    
                </div>
            </section>

        </main>
    );
};

export default Tell;