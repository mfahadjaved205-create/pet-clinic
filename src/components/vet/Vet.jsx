import React, { useState } from "react";
import {
  Activity,
  Shield,
  HeartPulse,
  Syringe,
  Smile,
  Microscope,
  Plus,
  Minus,
} from "lucide-react";

const Vet = () => {
  const [activeCard, setActiveCard] = useState(null);

  const wellnessServices = [
    {
      title: "Checkups",
      description:
        "Thorough physical exams and health monitoring.",
      icon: HeartPulse,
    },
    {
      title: "Vaccines",
      description:
        "Essential protection against common diseases.",
      icon: Syringe,
    },
    {
      title: "Dental",
      description:
        "Professional cleaning and oral health care.",
      icon: Smile,
    },
    {
      title: "Lab Work",
      description:
        "In-house blood work and diagnostic testing.",
      icon: Microscope,
    },
  ];

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
      {/* Main Section */}
      <section
        id="compassionate_wellness"
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto mt-15">

          {/* Hero / Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center mb-16 md:mb-24 lg:mb-32">

            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">

              <div>
                <p className="text-sm sm:text-base font-bold uppercase tracking-[3px] text-[#F29727] mb-3">
                  Veterinary Care
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#7C9D96]">
                  Compassionate{" "}
                  <span className="text-[#F29727]">
                    Wellness.
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-[#7C9D96]/70 font-medium leading-relaxed max-w-2xl">
                Our veterinary team focuses on preventative care and
                early detection. We believe in a holistic approach to
                pet health, ensuring your furry friends live long,
                vibrant lives.
              </p>

              {/* Feature Cards */}
              <div className="space-y-4">

                {/* Advanced Diagnostics */}
                <div
                  className="
                    flex items-start sm:items-center gap-4
                    p-5 sm:p-6
                    bg-white
                    rounded-3xl
                    shadow-[10px_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      min-w-12
                      bg-[#7C9D96]/10
                      rounded-2xl
                      flex items-center justify-center
                      text-[#7C9D96]
                      shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08)]
                    "
                  >
                    <Activity className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#7C9D96]">
                      Advanced Diagnostics
                    </h3>

                    <p className="text-sm text-[#7C9D96]/60 mt-1">
                      State-of-the-art equipment for accurate results.
                    </p>
                  </div>
                </div>

                {/* Preventative Plans */}
                <div
                  className="
                    flex items-start sm:items-center gap-4
                    p-5 sm:p-6
                    bg-white
                    rounded-3xl
                    shadow-[10px_10px_30px_rgba(0,0,0,0.05),-10px_-10px_30px_rgba(255,255,255,0.8)]
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  <div
                    className="
                      w-12 h-12
                      min-w-12
                      bg-[#7C9D96]/10
                      rounded-2xl
                      flex items-center justify-center
                      text-[#7C9D96]
                      shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08)]
                    "
                  >
                    <Shield className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#7C9D96]">
                      Preventative Plans
                    </h3>

                    <p className="text-sm text-[#7C9D96]/60 mt-1">
                      Customized wellness schedules for every life stage.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full">

              {/* Decorative Background */}
              <div className="
                absolute
                -top-5
                -right-5
                w-24
                h-24
                sm:w-32
                sm:h-32
                rounded-full
                bg-[#F29727]/10
                blur-2xl
              " />

              <div
                className="
                  relative
                  bg-white
                  p-3 sm:p-4
                  rounded-[30px]
                  shadow-[15px_15px_40px_rgba(0,0,0,0.08),-15px_-15px_40px_rgba(255,255,255,0.8)]
                  rotate-0
                  sm:-rotate-3
                  hover:rotate-0
                  transition-transform
                  duration-500
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=800"
                  alt="Veterinary pet care"
                  className="
                    rounded-3xl
                    sm:rounded-[30px]
                    w-full
                    aspect-square
                    object-cover
                  "
                />
              </div>
            </div>
          </div>

          {/* Services Heading */}
          <div className="text-center mb-10 md:mb-14">
            <p className="text-sm font-bold uppercase tracking-[3px] text-[#F29727] mb-3">
              Complete Pet Care
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7C9D96]">
              Everything Your Pet Needs
            </h2>

            <p className="mt-4 text-[#7C9D96]/60 max-w-2xl mx-auto">
              Professional veterinary services designed to keep your
              pets healthy, happy, and thriving.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">

            {wellnessServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeCard === index;

              return (
                <div
                  key={service.title}
                  onClick={() => toggleCard(index)}
                  className="
                    group
                    bg-white
                    rounded-[28px]
                    p-6 sm:p-8
                    text-center
                    cursor-pointer
                    shadow-[12px_12px_35px_rgba(0,0,0,0.05),-12px_-12px_35px_rgba(255,255,255,0.8)]
                    transition-all
                    duration-300
                    hover:-translate-y-2
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      bg-[#7C9D96]/10
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-5 sm:mb-6
                      text-[#7C9D96]
                      shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08)]
                      group-hover:bg-[#7C9D96]
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl mb-2 text-[#7C9D96]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#7C9D96]/60 font-medium leading-relaxed">
                    {service.description}
                  </p>

                  {/* JavaScript Toggle */}
                  <div className="mt-5 flex justify-center">
                    <div
                      className="
                        w-8 h-8
                        rounded-full
                        bg-[#F7F1E5]
                        flex
                        items-center
                        justify-center
                        text-[#7C9D96]
                      "
                    >
                      {isActive ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Extra Content */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "max-h-20 mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p className="text-xs text-[#F29727] font-semibold">
                      Click again to close this information.
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </main>
  );
};

export default Vet;