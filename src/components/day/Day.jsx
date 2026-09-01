
import React, { useState } from "react";
import {
  ShieldCheck,
  Users,
  Heart,
  Clock,
  CheckCircle,
} from "lucide-react";

const Day = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const schedule = [
    {
      time: "08",
      title: "Morning Arrivals",
      description:
        "Check-in and gentle socialization in small groups.",
    },
    {
      time: "10",
      title: "Active Playtime",
      description:
        "Supervised group play in our climate-controlled indoor park.",
    },
    {
      time: "12",
      title: "Nap & Snack Time",
      description:
        "Quiet time in individual cozy cubbies with soft music.",
    },
    {
      time: "02",
      title: "Afternoon Adventure",
      description:
        "Outdoor sensory play and enrichment activities.",
    },
  ];

  const requirements = [
    {
      icon: ShieldCheck,
      title: "Vaccinations",
      description:
        "Up-to-date Rabies, Distemper, and Bordetella required.",
    },
    {
      icon: Users,
      title: "Social Skills",
      description:
        "All pets must pass a brief temperament assessment.",
    },
    {
      icon: Heart,
      title: "Health",
      description:
        "Must be on flea/tick preventative and in good health.",
    },
  ];

  return (
    <main className="bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased min-h-screen">
      {/* Main Section */}
      <section
        id="play_socialize_repeat"
        className="py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto mt-15">

          {/* Heading */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7C9D96] mb-6">
              Play, Socialize,
              <span className="text-[#F29727]"> Repeat.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#7C9D96]/60 font-medium max-w-2xl mx-auto leading-relaxed">
              Our daycare is more than just a place to stay—it's a
              community where pets learn, play, and make lifelong friends.
            </p>
          </div>

          {/* Day in the Life + Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-20 md:mb-24">

            {/* Schedule Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#F29727]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#F29727]" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#7C9D96]">
                  A Day in the Life
                </h2>
              </div>

              <div className="space-y-5">
                {schedule.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      setSelectedTime(
                        selectedTime === index ? null : index
                      )
                    }
                    className={`w-full text-left flex gap-4 sm:gap-6 p-3 sm:p-4 rounded-3xl transition-all ${
                      selectedTime === index
                        ? "bg-[#F29727]/10 scale-[1.02]"
                        : "hover:bg-[#F7F1E5]"
                    }`}
                  >
                    {/* Time */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F29727]/10 rounded-2xl flex items-center justify-center text-[#F29727] shrink-0 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05)]">
                      <span className="font-bold text-lg">
                        {item.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-base sm:text-lg text-gray-800">
                          {item.title}
                        </h3>

                        {selectedTime === index && (
                          <CheckCircle className="w-5 h-5 text-[#F29727] shrink-0" />
                        )}
                      </div>

                      <p className="text-[#7C9D96]/60 text-sm sm:text-base mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {/* Image 1 */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600"
                  alt="Dogs playing together"
                  className="rounded-3xl sm:rounded-[30px] w-full h-full min-h-64 object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="bg-white rounded-3xl p-3 sm:p-4 translate-y-6 sm:translate-y-12 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)] mb-13">
                <img
                  src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600"
                  alt="Happy dog at pet daycare"
                  className="rounded--3xl sm:rounded-[30px] w-full h-full min-h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Daycare Requirements */}
          <div className="bg-[#F29727] text-white rounded--3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.08)]">

            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Daycare Requirements
              </h2>

              <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
                We want every pet to have a safe, healthy, and enjoyable
                daycare experience.
              </p>
            </div>

            {/* Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
              {requirements.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="p-6 bg-white/10 rounded-3xl text-center hover:bg-white/20 hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-10 h-10" />
                    </div>

                    <h3 className="font-bold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Day;

