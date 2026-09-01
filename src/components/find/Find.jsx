
import React from "react";
import {
  Scissors,
  Stethoscope,
  Home,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router";

const services = [
  {
    title: "Expert Grooming",
    description:
      "Full spa treatments, breed-specific cuts, and gentle nail trimming for all sizes.",
    icon: Scissors,
    iconBg: "#F7E5D0",
    accent: "#D98A3D",
    link: "/servicesnav",
  },
  {
    title: "Veterinary Care",
    description:
      "Routine checkups, vaccinations, and wellness exams by our compassionate vets.",
    icon: Stethoscope,
    iconBg: "#E6EBE5",
    accent: "#5F7F6C",
    link: "/servicesnav",
  },
  {
    title: "Pet Daycare",
    description:
      "A safe, fun environment for your pets to socialize and play while you're away.",
    icon: Home,
    iconBg: "#F8DFDA",
    accent: "#C15B4C",
    link: "/servicesnav",
  },
];

const Find = () => {
  return (
    <section
      id="our_pawsome_services"
      className="py-32 px-6"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #FBF6EC 0%, #F1E9D9 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-5"
            style={{ color: "#5F7F6C" }}
          >
            Our Pawsome Services
          </h2>

          <p
            className="max-w-2xl mx-auto font-medium"
            style={{ color: "#8A9A8E" }}
          >
            We offer a full range of care services designed to keep your pets
            healthy, clean, and wagging their tails.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[28px] p-10 transition-all duration-300 hover:-translate-y-2"
                style={{
                  boxShadow:
                    "0 25px 50px -20px rgba(95,127,108,0.20)",
                }}
              >

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                  style={{
                    backgroundColor: service.iconBg,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{
                      color: "#5F7F6C",
                    }}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-extrabold mb-4"
                  style={{
                    color: "#4F6E5C",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="font-medium mb-8 leading-relaxed"
                  style={{
                    color: "#9AA79D",
                  }}
                >
                  {service.description}
                </p>

                {/* Learn More */}
                <NavLink
                  to={service.link}
                  className="font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
                  style={{
                    color: service.accent,
                  }}
                >
                  Learn More

                  <ArrowRight className="w-4 h-4" />
                </NavLink>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Find;
