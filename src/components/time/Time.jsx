import React, { useState } from "react";
import {
  Scissors,
  Stethoscope,
  Home,
} from "lucide-react";
import { useNavigate, NavLink } from "react-router";

const Time = () => {
  const navigate = useNavigate();

  const [service, setService] = useState("");
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("Dog");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!service || !petName || !date || !time) {
      setMessage("Please fill in all required fields.");
      setIsError(true);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please sign in first to book an appointment.");
      setIsError(true);
      setTimeout(() => navigate("/signin"), 1500);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          petName,
          petType,
          service,
          date,
          time,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Something went wrong. Please try again.");
        setIsError(true);
        setLoading(false);
        return;
      }

      setMessage(
        `Booking confirmed for ${petName}! Your slot number for this date is #${data.slotNumber}.`
      );
      setIsError(false);
      setService("");
      setPetName("");
      setPetType("Dog");
      setDate("");
      setTime("");
      setLoading(false);
    } catch (err) {
      setMessage("Could not connect to server. Please try again.");
      setIsError(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">

      {/* ================= MAIN ================= */}
      <main className="pt-40 pb-32 px-6 ">

        {/* Book A Visit */}
        <section id="book_a_visit">

          <div className="max-w-4xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-16">

              <h1 className="text-5xl md:text-6xl font-bold text-[#7C9D96] mb-6">
                Book a{" "}
                <span className="text-[#F29727]">
                  Visit.
                </span>
              </h1>

              <p className="text-xl text-[#7C9D96]/60 font-medium">
                Choose a service and find a time that works for you and
                your pet.
              </p>

              <NavLink
                to="/appointments"
                className="inline-block mt-6 px-8 py-3 bg-white text-[#7C9D96] font-bold rounded-full shadow-[8px_8px_20px_rgba(0,0,0,0.05),-8px_-8px_20px_rgba(255,255,255,0.8)] hover:scale-105 transition-transform"
              >
                Check All Appointments
              </NavLink>

            </div>

            {/* Booking Card */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">

              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >

                {/* ================= SERVICE ================= */}
                <div className="space-y-6">

                  <h3 className="text-xl font-bold text-[#7C9D96]">
                    1. Select Service
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Grooming */}
                    <label className="relative cursor-pointer group">

                      <input
                        className="peer sr-only"
                        name="service"
                        type="radio"
                        value="Grooming"
                        checked={service === "Grooming"}
                        onChange={(e) =>
                          setService(e.target.value)
                        }
                      />

                      <div className="p-6 bg-white rounded-[25px] shadow-[8px_8px_20px_rgba(0,0,0,0.05),-8px_-8px_20px_rgba(255,255,255,0.8)] text-center peer-checked:bg-[#F29727] peer-checked:text-white transition-all group-hover:scale-105">

                        <Scissors className="w-8 h-8 mx-auto mb-2" />

                        <span className="font-bold block">
                          Grooming
                        </span>

                      </div>
                    </label>

                    {/* Veterinary */}
                    <label className="relative cursor-pointer group">

                      <input
                        className="peer sr-only"
                        name="service"
                        type="radio"
                        value="Veterinary"
                        checked={service === "Veterinary"}
                        onChange={(e) =>
                          setService(e.target.value)
                        }
                      />

                      <div className="p-6 bg-white rounded-[25px] shadow-[8px_8px_20px_rgba(0,0,0,0.05),-8px_-8px_20px_rgba(255,255,255,0.8)] text-center peer-checked:bg-[#7C9D96] peer-checked:text-white transition-all group-hover:scale-105">

                        <Stethoscope className="w-8 h-8 mx-auto mb-2" />

                        <span className="font-bold block">
                          Veterinary
                        </span>

                      </div>
                    </label>

                    {/* Daycare */}
                    <label className="relative cursor-pointer group">

                      <input
                        className="peer sr-only"
                        name="service"
                        type="radio"
                        value="Daycare"
                        checked={service === "Daycare"}
                        onChange={(e) =>
                          setService(e.target.value)
                        }
                      />

                      <div className="p-6 bg-white rounded-[25px] shadow-[8px_8px_20px_rgba(0,0,0,0.05),-8px_-8px_20px_rgba(255,255,255,0.8)] text-center peer-checked:bg-[#E97862] peer-checked:text-white transition-all group-hover:scale-105">

                        <Home className="w-8 h-8 mx-auto mb-2" />

                        <span className="font-bold block">
                          Daycare
                        </span>

                      </div>
                    </label>

                  </div>
                </div>

                {/* ================= PET INFORMATION ================= */}
                <div className="space-y-6">

                  <h3 className="text-xl font-bold text-[#7C9D96]">
                    2. Pet Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Pet Name */}
                    <div className="space-y-2">

                      <label className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2">
                        Pet's Name
                      </label>

                      <input
                        className="w-full px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#7C9D96]"
                        placeholder="e.g. Buddy"
                        type="text"
                        value={petName}
                        onChange={(e) =>
                          setPetName(e.target.value)
                        }
                      />

                    </div>

                    {/* Pet Type */}
                    <div className="space-y-2">

                      <label className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2">
                        Pet Type
                      </label>

                      <select
                        className="w-full px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#7C9D96] appearance-none"
                        value={petType}
                        onChange={(e) =>
                          setPetType(e.target.value)
                        }
                      >
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Other</option>
                      </select>

                    </div>

                  </div>
                </div>

                {/* ================= DATE & TIME ================= */}
                <div className="space-y-6">

                  <h3 className="text-xl font-bold text-[#7C9D96]">
                    3. Date & Time
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Date */}
                    <div className="space-y-2">

                      <label className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2">
                        Preferred Date
                      </label>

                      <input
                        className="w-full px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#7C9D96]"
                        type="date"
                        value={date}
                        onChange={(e) =>
                          setDate(e.target.value)
                        }
                      />

                    </div>

                    {/* Time */}
                    <div className="space-y-2">

                      <label className="text-sm font-bold text-[#7C9D96]/40 uppercase ml-2">
                        Preferred Time
                      </label>

                      <select
                        className="w-full px-6 py-4 bg-[#F7F1E5] rounded-2xl border-none outline-none shadow-[inset_4px_4px_10px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-[#7C9D96] appearance-none"
                        value={time}
                        onChange={(e) =>
                          setTime(e.target.value)
                        }
                      >
                        <option value="">
                          Select Time
                        </option>

                        <option>
                          Morning (8am - 12pm)
                        </option>

                        <option>
                          Afternoon (12pm - 4pm)
                        </option>

                        <option>
                          Evening (4pm - 7pm)
                        </option>

                      </select>

                    </div>

                  </div>
                </div>

                {/* ================= MESSAGE ================= */}
                {message && (
                  <div
                    className={`p-4 rounded-2xl font-semibold text-center ${
                      isError
                        ? "bg-red-50 text-red-600"
                        : "bg-[#7C9D96]/10 text-[#7C9D96]"
                    }`}
                  >
                    {message}
                  </div>
                )}

                {/* ================= SUBMIT ================= */}
                <button
                  className="w-full py-6 bg-[#F29727] text-white rounded-[30px] font-bold text-xl shadow-xl hover:scale-[1.02] transition-all disabled:opacity-60 disabled:hover:scale-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Confirm Booking Request"}
                </button>

              </form>

            </div>
          </div>

        </section>
      </main>

    </div>
  );
};

export default Time;