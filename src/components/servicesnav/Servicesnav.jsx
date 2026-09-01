import React from "react";
import {
  Scissors,
  Stethoscope,
  Home,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router";

const ServicesnavSection = () => {
  const services = [
    {
      title: "Professional Grooming",
      description:
        "Our spa treatments include organic shampoos, breed-specific styling, and a stress-free environment that keeps pets calm and happy.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
      icon: Scissors,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      buttonText: "View Grooming Packages",
      buttonColor: "bg-orange-500",
      link: "/pung",
      features: [
        "Full Bath & Brush",
        "Nail Trimming",
        "Ear Cleaning",
        "De-shedding Treatment",
      ],
      reverse: false,
    },

    {
      title: "Veterinary Wellness",
      description:
        "Preventative care is the foundation of a long, healthy life. Our vets provide thorough exams and personalized health plans.",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=600",
      icon: Stethoscope,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-700",
      buttonText: "Explore Vet Services",
      buttonColor: "bg-emerald-700",
      link: "/sum",
      features: [
        "Annual Checkups",
        "Vaccinations",
        "Dental Care",
        "Nutritional Advice",
      ],
      reverse: true,
    },

    {
      title: "Pet Daycare",
      description:
        "Socialization and play are vital for a balanced pet. Our daycare offers supervised group play and cozy nap areas.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      icon: Home,
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      buttonText: "Book Daycare",
      buttonColor: "bg-red-500",
      link: "/care",
      features: [
        "Supervised Play",
        "Climate Controlled",
        "Daily Updates",
        "Outdoor Time",
      ],
      reverse: false,
    },
  ];

  return (
    <section
      id="everything_your_pet_needs"
      className="py-20 px-6 bg-[#F5EFE3]"
    >
      <div className="max-w-6xl mx-auto mt-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-700 mb-4">
            Everything Your Pet{" "}
            <span className="text-orange-500">Needs.</span>
          </h1>

          <p className="text-lg text-emerald-700/50 font-medium max-w-2xl mx-auto">
            Comprehensive care solutions tailored to your pet's unique
            personality and health requirements.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-sm p-8 md:p-12 flex flex-col ${service.reverse
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                  } gap-10 items-center`}
              >

                {/* Image */}
                <div className="w-full lg:w-1/3 aspect-square rounded-3xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt={service.title}
                    src={service.image}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-5">

                  {/* Icon + Heading */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 ${service.iconBg} rounded-2xl flex items-center justify-center ${service.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h2 className="text-2xl font-bold text-emerald-700">
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-base text-emerald-700/50 font-medium">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 font-semibold text-sm text-emerald-700/60"
                      >
                        <CheckCircle
                          className={`${service.iconColor} w-4 h-4`}
                        />

                        {feature}
                      </li>
                    ))}

                  </ul>

                  {/* Button */}
                  <NavLink to={service.link}
                    
                    className={`inline-block px-6 py-3 ${service.buttonColor} text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-all duration-300`}
                  >
                    {service.buttonText}
                  </NavLink>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ServicesnavSection;