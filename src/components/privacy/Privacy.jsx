import React from "react";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased pt-32 sm:pt-36 pb-20 sm:pb-32 px-4 sm:px-6">
      
      {/* =========================
          PRIVACY POLICY
      ========================= */}
      <section id="privacy_policy">
        <div className="max-w-3xl mx-auto">

          {/* Page Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7C9D96] mb-8 sm:mb-12 text-center sm:text-left">
            Privacy{" "}
            <span className="text-[#F29727]">
              Policy.
            </span>
          </h1>

          {/* Privacy Card */}
          <div
            className="
              bg-white/80
              backdrop-blur-sm
              rounded-[35px]
              sm:rounded-[45px]
              p-6
              sm:p-8
              md:p-12
              space-y-8
              text-[#7C9D96]/70
              font-medium
              leading-relaxed
              shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
              border
              border-white/30
            "
          >

            {/* =========================
                1. INFORMATION WE COLLECT
            ========================= */}
            <section id="information-we-collect">

              <h2 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-4">
                1. Information We Collect
              </h2>

              <p className="text-sm sm:text-base">
                We collect information you provide when booking
                appointments, such as your name, email, phone number,
                and details about your pet's health and history.
              </p>

            </section>

            {/* =========================
                2. HOW WE USE INFORMATION
            ========================= */}
            <section id="how-we-use-information">

              <h2 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-4">
                2. How We Use Your Information
              </h2>

              <p className="text-sm sm:text-base">
                Your information is used to manage bookings, provide
                veterinary care, send appointment reminders, and
                improve our services.
              </p>

            </section>

            {/* =========================
                3. DATA SECURITY
            ========================= */}
            <section id="data-security">

              <h2 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-4">
                3. Data Security
              </h2>

              <p className="text-sm sm:text-base">
                We take the security of your personal and pet data
                seriously. We use industry-standard encryption and
                secure storage systems.
              </p>

            </section>

            {/* =========================
                4. THIRD PARTIES
            ========================= */}
            <section id="third-parties">

              <h2 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-4">
                4. Third Parties
              </h2>

              <p className="text-sm sm:text-base">
                We do not sell your data. We only share information
                with third-party partners, such as diagnostic labs,
                when necessary for your pet's care.
              </p>

            </section>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Privacy;