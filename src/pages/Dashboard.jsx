import React from "react";
import { NavLink } from "react-router";

const Dashboard = () => {
  // =========================
  // User Info
  // =========================
  let userName = "there";
  try {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.name) userName = storedUser.name;
  } catch (e) {
    // agar parse na ho to default "there" hi rahega
  }

  // =========================
  // Dummy Data (backend se replace karna baad mein)
  // =========================
  const stats = [
    { label: "My Pets", value: 2 },
    { label: "Upcoming Visits", value: 1 },
    { label: "Total Orders", value: 5 },
    { label: "Vaccinations Due", value: 1 },
  ];

  const appointments = [
    {
      id: 1,
      pet: "Bruno",
      date: "12 Sep, 2026",
      time: "11:00 AM",
      doctor: "Dr. Ayesha Khan",
      status: "Confirmed",
    },
  ];

  const orders = [
    { id: "ORD-1042", item: "Dog Food (5kg)", date: "02 Sep, 2026", status: "Delivered" },
    { id: "ORD-1038", item: "Flea Shampoo", date: "28 Aug, 2026", status: "Delivered" },
  ];

  const statusStyle = (status) => {
    if (status === "Confirmed" || status === "Delivered") {
      return "bg-[#7C9D96]/10 text-[#7C9D96]";
    }
    if (status === "Pending") {
      return "bg-[#F29727]/10 text-[#F29727]";
    }
    return "bg-gray-100 text-gray-500";
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] pt-28 pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* =========================
            WELCOME HEADER
        ========================= */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#7C9D96]">
            Welcome back, {userName}
          </h1>
          <p className="text-sm sm:text-base text-[#7C9D96]/70 mt-1">
            Here's what's happening with your pets today.
          </p>
        </div>

        {/* =========================
            QUICK STATS
        ========================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl px-5 py-5 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40"
            >
              <p className="text-2xl sm:text-3xl font-bold text-[#7C9D96]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#7C9D96]/60 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* =========================
              LEFT: APPOINTMENTS + PETS
          ========================= */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#7C9D96]">
                  Upcoming Appointments
                </h2>
                <NavLink
                  to="/booking"
                  className="text-sm font-bold text-[#F29727] hover:underline"
                >
                  Book New
                </NavLink>
              </div>

              {appointments.length === 0 ? (
                <p className="text-sm text-[#7C9D96]/60">
                  No upcoming appointments. Book one for your pet.
                </p>
              ) : (
                <div className="flex flex-col gap-3">
                  {appointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-center justify-between bg-[#F7F1E5] rounded-xl px-4 py-3"
                    >
                      <div>
                        <p className="font-bold text-[#7C9D96] text-sm sm:text-base">
                          {apt.pet}
                        </p>
                        <p className="text-xs sm:text-sm text-[#7C9D96]/60">
                          {apt.date} · {apt.time} · {apt.doctor}
                        </p>
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${statusStyle(
                          apt.status
                        )}`}
                      >
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* =========================
              RIGHT: ORDERS + QUICK LINKS
          ========================= */}
          <div className="flex flex-col gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-[#7C9D96]">
                  Recent Orders
                </h2>
                <NavLink
                  to="/shop"
                  className="text-sm font-bold text-[#F29727] hover:underline"
                >
                  Shop
                </NavLink>
              </div>

              <div className="flex flex-col gap-3">
                {orders.map((order) => (
                  <div key={order.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-[#7C9D96] text-sm">
                        {order.item}
                      </p>
                      <span
                        className={`text-[10px] font-bold px-2 py-1 rounded-full ${statusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#7C9D96]/50 mt-1">
                      {order.id} · {order.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
              <h2 className="text-lg font-bold text-[#7C9D96] mb-4">
                Quick Links
              </h2>
              <div className="flex flex-col gap-3 text-sm font-bold">
                <NavLink to="/profile" className="text-[#7C9D96]/80 hover:text-[#7C9D96]">
                  My Profile
                </NavLink>
                <NavLink to="/settings" className="text-[#7C9D96]/80 hover:text-[#7C9D96]">
                  Settings
                </NavLink>
                <NavLink to="/booking" className="text-[#7C9D96]/80 hover:text-[#7C9D96]">
                  Book Appointment
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;