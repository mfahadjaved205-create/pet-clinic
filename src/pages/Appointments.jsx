import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user") || "null");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings");
        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Could not load appointments.");
          setLoading(false);
          return;
        }

        setBookings(data);
        setLoading(false);
      } catch (err) {
        setError("Could not connect to server.");
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const isMyBooking = (booking) => {
    if (!currentUser) return false;
    return booking.user === currentUser._id;
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
      <main className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-[#7C9D96] mb-4">
              All <span className="text-[#F29727]">Appointments</span>
            </h1>
            <p className="text-xl text-[#7C9D96]/60 font-medium">
              {currentUser
                ? "Your appointment is highlighted below."
                : "Sign in to see your appointment highlighted."}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)] overflow-x-auto">
            {loading && (
              <p className="text-center py-10 text-lg font-semibold">
                Loading appointments...
              </p>
            )}

            {error && (
              <p className="text-center py-10 text-red-600 font-semibold">
                {error}
              </p>
            )}

            {!loading && !error && bookings.length === 0 && (
              <p className="text-center py-10 text-lg font-semibold">
                No appointments booked yet.
              </p>
            )}

            {!loading && !error && bookings.length > 0 && (
              <table className="w-full min-w-700px border-collapse">
                <thead>
                  <tr className="text-left text-sm font-bold text-[#7C9D96]/50 uppercase border-b-2 border-[#F7F1E5]">
                    <th className="py-4 px-4">Slot #</th>
                    <th className="py-4 px-4">Owner</th>
                    <th className="py-4 px-4">Pet</th>
                    <th className="py-4 px-4">Service</th>
                    <th className="py-4 px-4">Date</th>
                    <th className="py-4 px-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className={`border-b border-[#F7F1E5] transition-colors ${
                        isMyBooking(booking)
                          ? "bg-[#F29727]/20 font-bold"
                          : "hover:bg-[#F7F1E5]/60"
                      }`}
                    >
                      <td className="py-4 px-4">#{booking.slotNumber}</td>
                      <td className="py-4 px-4">
                        {booking.ownerName}
                        {isMyBooking(booking) && (
                          <span className="ml-2 text-xs bg-[#F29727] text-white px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {booking.petName} ({booking.petType})
                      </td>
                      <td className="py-4 px-4">{booking.service}</td>
                      <td className="py-4 px-4">{booking.date}</td>
                      <td className="py-4 px-4">{booking.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;