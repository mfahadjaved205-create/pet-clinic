import React, { useState } from "react";
import {
  Wind,
  Droplets,
  Check,
  Calendar,
  X,
  PawPrint,
} from "lucide-react";

const View = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const packages = [
    {
      id: 1,
      name: "The Quick Refresh",
      price: "$45+",
      features: [
        "Warm Water Bath",
        "Blow Dry",
        "Brush Out",
        "Scented Spritz",
      ],
    },
    {
      id: 2,
      name: "The Full Pawsitive",
      price: "$75+",
      popular: true,
      features: [
        "Everything in Refresh",
        "Breed-Specific Cut",
        "Nail Trimming",
        "Ear Cleaning",
      ],
    },
    {
      id: 3,
      name: "The Royal Treatment",
      price: "$110+",
      features: [
        "Everything in Full",
        "Teeth Brushing",
        "Paw Pad Balm",
        "Blueberry Facial",
      ],
    },
  ];

  const handleBooking = (pkg) => {
    setSelectedPackage(pkg);
    setBookingSuccess(false);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">

      {/* Main Content */}
      <main className="pt-10">
        <section
          id="the_ultimate_spa_day"
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-16 lg:mb-24">

              {/* Text */}
              <div className="flex-1 space-y-6 lg:space-y-8 w-full">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#7C9D96]">
                  The Ultimate{" "}
                  <span className="text-[#F29727]">
                    Spa Day.
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#7C9D96]/70 font-medium leading-relaxed max-w-2xl">
                  Our grooming salon is designed to be a sanctuary. We use
                  only organic, hypoallergenic products and take our time with
                  every pet to ensure they feel safe and pampered.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div
                    className="
                      bg-white/80
                      p-4
                      rounded-2xl
                      flex
                      items-center
                      gap-3
                      shadow-[8px_8px_20px_rgba(0,0,0,0.05)]
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <Wind
                      className="text-[#F29727] w-6 h-6 shrink-0"
                    />

                    <span className="font-bold text-sm sm:text-base">
                      Stress-Free Drying
                    </span>
                  </div>

                  <div
                    className="
                      bg-white/80
                      p-4
                      rounded-2xl
                      flex
                      items-center
                      gap-3
                      shadow-[8px_8px_20px_rgba(0,0,0,0.05)]
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    <Droplets
                      className="text-[#F29727] w-6 h-6 shrink-0"
                    />

                    <span className="font-bold text-sm sm:text-base">
                      Organic Shampoos
                    </span>
                  </div>

                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2">

                <div
                  className="
                    bg-white
                    p-3 sm:p-4
                    rounded-[30px]
                    shadow-[15px_15px_40px_rgba(0,0,0,0.08)]
                    rotate-1
                    hover:rotate-0
                    transition-transform
                    duration-500
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800"
                    alt="Grooming Spa"
                    className="
                      rounded-3xl sm:rounded-[30px]
                      w-full
                      aspect-video
                      object-cover
                    "
                  />
                </div>

              </div>
            </div>

            {/* Package Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7C9D96] text-center mb-10 lg:mb-16">
              Grooming Packages
            </h2>

            {/* Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`
                    relative
                    bg-white
                    p-7 sm:p-8 lg:p-10
                    rounded-[28px]
                    flex
                    flex-col
                    shadow-[15px_15px_40px_rgba(0,0,0,0.06)]
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    ${
                      pkg.popular
                        ? "border-2 border-[#F29727]/30"
                        : ""
                    }
                  `}
                >

                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div
                      className="
                        absolute
                        -top-4
                        left-1/2
                        -translate-x-1/2
                        bg-[#F29727]
                        text-white
                        px-4
                        py-1.5
                        rounded-full
                        text-[10px]
                        sm:text-xs
                        font-bold
                        uppercase
                        tracking-widest
                        whitespace-nowrap
                      "
                    >
                      Most Popular
                    </div>
                  )}

                  {/* Package Name */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-2">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <p className="text-[#F29727] font-bold text-3xl mb-6">
                    {pkg.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 lg:mb-10 flex-1">

                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        className="
                          flex
                          items-center
                          gap-3
                          font-medium
                          text-[#7C9D96]/60
                          text-sm sm:text-base
                        "
                      >
                        <Check
                          className="
                            text-[#F29727]
                            w-5
                            h-5
                            shrink-0
                          "
                        />

                        <span>{feature}</span>
                      </li>
                    ))}

                  </ul>

                  {/* Booking Button */}
                  <button
                    onClick={() => handleBooking(pkg)}
                    className={`
                      w-full
                      py-3.5 sm:py-4
                      rounded-2xl
                      font-bold
                      text-center
                      hover:scale-[1.03]
                      active:scale-95
                      transition-all
                      flex
                      items-center
                      justify-center
                      gap-2
                      ${
                        pkg.popular
                          ? "bg-[#F29727] text-white shadow-lg"
                          : "bg-[#F7F1E5] text-[#7C9D96] shadow-[6px_6px_15px_rgba(0,0,0,0.05)]"
                      }
                    `}
                  >
                    <Calendar className="w-5 h-5" />
                    Book Now
                  </button>

                </div>
              ))}

            </div>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {showModal && selectedPackage && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setShowModal(false)}
        >

          <div
            className="
              bg-[#F7F1E5]
              w-full
              max-w-lg
              rounded-[30px]
              p-6
              sm:p-8
              shadow-2xl
              relative
              max-h-[90vh]
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              className="
                absolute
                top-4
                right-4
                w-10
                h-10
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                text-[#7C9D96]
                hover:bg-[#F29727]
                hover:text-white
                transition-all
              "
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <>
                {/* Modal Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="
                      w-16
                      h-16
                      bg-[#7C9D96]
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      shadow-lg
                    "
                  >
                    <PawPrint className="text-white w-8 h-8" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#7C9D96] text-center">
                  Book Your Grooming
                </h2>

                <p className="text-center text-[#7C9D96]/60 mt-2 mb-6">
                  Selected package:{" "}
                  <span className="font-bold text-[#F29727]">
                    {selectedPackage.name}
                  </span>
                </p>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <div>
                    <label className="block font-bold text-[#7C9D96] mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-2xl
                        border-none
                        outline-none
                        bg-white
                        text-[#7C9D96]
                        focus:ring-2
                        focus:ring-[#F29727]
                      "
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#7C9D96] mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-2xl
                        border-none
                        outline-none
                        bg-white
                        text-[#7C9D96]
                        focus:ring-2
                        focus:ring-[#F29727]
                      "
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#7C9D96] mb-2">
                      Pet Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter your pet's name"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-2xl
                        border-none
                        outline-none
                        bg-white
                        text-[#7C9D96]
                        focus:ring-2
                        focus:ring-[#F29727]
                      "
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#7C9D96] mb-2">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-2xl
                        border-none
                        outline-none
                        bg-white
                        text-[#7C9D96]
                        focus:ring-2
                        focus:ring-[#F29727]
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      w-full
                      py-4
                      bg-[#F29727]
                      text-white
                      rounded-2xl
                      font-bold
                      shadow-lg
                      hover:scale-[1.02]
                      active:scale-95
                      transition-all
                    "
                  >
                    Confirm Appointment
                  </button>

                </form>
              </>
            ) : (

              /* Success Message */
              <div className="text-center py-8">

                <div
                  className="
                    w-20
                    h-20
                    bg-[#7C9D96]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-5
                  "
                >
                  <Check className="text-white w-10 h-10" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#7C9D96] mb-3">
                  Booking Confirmed!
                </h2>

                <p className="text-[#7C9D96]/60 mb-6">
                  Your appointment request for{" "}
                  <strong className="text-[#F29727]">
                    {selectedPackage.name}
                  </strong>{" "}
                  has been submitted successfully.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="
                    px-8
                    py-3
                    bg-[#F29727]
                    text-white
                    rounded-2xl
                    font-bold
                    hover:scale-105
                    transition-all
                  "
                >
                  Done
                </button>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default View;