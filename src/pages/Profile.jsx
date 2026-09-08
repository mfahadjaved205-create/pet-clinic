import React, { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  // =========================
  // User Info (localStorage se)
  // =========================
  let storedUser = {};
  try {
    storedUser = JSON.parse(localStorage.getItem("user")) || {};
  } catch (e) {
    storedUser = {};
  }

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: storedUser.name || "",
    email: storedUser.email || "",
    phone: storedUser.phone || "",
    address: storedUser.address || "",
  });

  // =========================
  // Modal Visibility States
  // =========================
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  // =========================
  // Change Photo State
  // =========================
  const [photoPreview, setPhotoPreview] = useState(storedUser.photo || null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handlePhotoSave = () => {
    // TODO: yahan actual file upload API call hogi backend ready hone pe
    setShowPhotoModal(false);
  };

  // =========================
  // Change Password State
  // =========================
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    setPasswordError("");
  };

  const handlePasswordSave = () => {
    if (!passwordForm.currentPassword || !passwordForm.newPassword) {
      setPasswordError("Sab fields fill karna zaroori hai.");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordError("New password aur confirm password match nahi karte.");
      return;
    }
    // TODO: yahan actual API call hogi backend ready hone pe
    setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setShowPasswordModal(false);
  };

  // =========================
  // Manage Address State
  // =========================
  const [addressForm, setAddressForm] = useState({
    fullAddress: storedUser.address || "",
    city: storedUser.city || "",
    postalCode: storedUser.postalCode || "",
  });

  const handleAddressChange = (e) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };

  const handleAddressSave = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ ...storedUser, ...form, ...addressForm })
    );
    setForm({ ...form, address: addressForm.fullAddress });
    setShowAddressModal(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify({ ...storedUser, ...form }));
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/signin");
  };

  // =========================
  // Dummy Data (backend se replace karna baad mein)
  // =========================
  const pets = [
    { id: 1, name: "Bruno", breed: "Labrador", age: "3 yrs" },
    { id: 2, name: "Mimi", breed: "Persian Cat", age: "1.5 yrs" },
  ];

  const appointments = [
    { id: 1, pet: "Bruno", date: "12 Sep, 2026", doctor: "Dr. Ayesha Khan", status: "Upcoming" },
    { id: 2, pet: "Mimi", date: "20 Aug, 2026", doctor: "Dr. Ali Raza", status: "Completed" },
    { id: 3, pet: "Bruno", date: "05 Jul, 2026", doctor: "Dr. Ayesha Khan", status: "Cancelled" },
  ];

  const orders = [
    { id: "ORD-1042", item: "Dog Food (5kg)", date: "02 Sep, 2026", amount: "Rs. 2,400", status: "Delivered" },
    { id: "ORD-1038", item: "Flea Shampoo", date: "28 Aug, 2026", amount: "Rs. 850", status: "Delivered" },
  ];

  const statusStyle = (status) => {
    if (status === "Upcoming" || status === "Delivered") {
      return "bg-[#7C9D96]/10 text-[#7C9D96]";
    }
    if (status === "Completed") {
      return "bg-[#F29727]/10 text-[#F29727]";
    }
    return "bg-red-50 text-red-400";
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] pt-28 pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* =========================
            PERSONAL INFORMATION
        ========================= */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-[#7C9D96]">
              Personal Information
            </h2>
            <button
              type="button"
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              className="text-sm font-bold text-[#F29727] hover:underline"
            >
              {isEditing ? "Save" : "Edit Profile"}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            {/* Photo */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-20 h-20 rounded-full bg-[#7C9D96] flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  (form.name || "U").charAt(0).toUpperCase()
                )}
              </div>
              {isEditing && (
                <button
                  type="button"
                  onClick={() => setShowPhotoModal(true)}
                  className="text-xs font-bold text-[#7C9D96]/70 hover:text-[#7C9D96]"
                >
                  Change Photo
                </button>
              )}
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                  />
                ) : (
                  <p className="text-sm font-bold text-[#7C9D96] mt-1">
                    {form.name || "—"}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Email
                </label>
                {isEditing ? (
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                  />
                ) : (
                  <p className="text-sm font-bold text-[#7C9D96] mt-1">
                    {form.email || "—"}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                  />
                ) : (
                  <p className="text-sm font-bold text-[#7C9D96] mt-1">
                    {form.phone || "—"}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Address
                </label>
                {isEditing ? (
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                  />
                ) : (
                  <p className="text-sm font-bold text-[#7C9D96] mt-1">
                    {form.address || "—"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            MY PETS
        ========================= */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-[#7C9D96]">My Pets</h2>
            <button
              type="button"
              className="text-sm font-bold text-[#F29727] hover:underline"
            >
              Pet
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="flex items-center gap-3 bg-[#F7F1E5] rounded-xl px-4 py-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#7C9D96] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {pet.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[#7C9D96] text-sm">
                    {pet.name}
                  </p>
                  <p className="text-xs text-[#7C9D96]/60">
                    {pet.breed} · {pet.age}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            APPOINTMENT HISTORY
        ========================= */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
          <h2 className="text-lg font-bold text-[#7C9D96] mb-5">
            Appointment History
          </h2>

          <div className="flex flex-col gap-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-bold text-[#7C9D96] text-sm">
                    {apt.pet}
                  </p>
                  <p className="text-xs text-[#7C9D96]/60">
                    {apt.date} · {apt.doctor}
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
        </div>

        {/* =========================
            ORDER HISTORY
        ========================= */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
          <h2 className="text-lg font-bold text-[#7C9D96] mb-5">
            Order History
          </h2>

          <div className="flex flex-col gap-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-bold text-[#7C9D96] text-sm">
                    {order.item}
                  </p>
                  <p className="text-xs text-[#7C9D96]/60">
                    {order.id} · {order.date} · {order.amount}
                  </p>
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${statusStyle(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            ACCOUNT & SECURITY
        ========================= */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.04)] border border-white/40">
          <h2 className="text-lg font-bold text-[#7C9D96] mb-5">
            Account & Security
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col gap-3 text-sm font-bold">
              <button
                type="button"
                onClick={() => setShowPasswordModal(true)}
                className="text-left text-[#7C9D96]/80 hover:text-[#7C9D96]"
              >
                Change Password
              </button>
              <button
                type="button"
                onClick={() => setShowAddressModal(true)}
                className="text-left text-[#7C9D96]/80 hover:text-[#7C9D96]"
              >
                Manage Saved Address
              </button>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl text-sm font-bold text-red-500 border border-red-200 hover:bg-red-50 transition-colors w-fit"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          CHANGE PHOTO MODAL
      ========================= */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-[#7C9D96] mb-4">
              Change Photo
            </h3>

            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-[#7C9D96] flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
                {photoPreview ? (
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  (form.name || "U").charAt(0).toUpperCase()
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="text-xs text-[#7C9D96]/70"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="px-4 py-2 rounded-xl text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handlePhotoSave}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-[#F29727] text-white hover:scale-105 transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          CHANGE PASSWORD MODAL
      ========================= */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-[#7C9D96] mb-4">
              Change Password
            </h3>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  New Password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>

              {passwordError && (
                <p className="text-xs font-bold text-red-500">
                  {passwordError}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordError("");
                }}
                className="px-4 py-2 rounded-xl text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handlePasswordSave}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-[#F29727] text-white hover:scale-105 transition-all"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================
          MANAGE ADDRESS MODAL
      ========================= */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-[#7C9D96] mb-4">
              Manage Saved Address
            </h3>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Full Address
                </label>
                <input
                  name="fullAddress"
                  value={addressForm.fullAddress}
                  onChange={handleAddressChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  City
                </label>
                <input
                  name="city"
                  value={addressForm.city}
                  onChange={handleAddressChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#7C9D96]/60">
                  Postal Code
                </label>
                <input
                  name="postalCode"
                  value={addressForm.postalCode}
                  onChange={handleAddressChange}
                  className="w-full mt-1 px-3 py-2 rounded-xl bg-[#F7F1E5] text-sm text-[#7C9D96] outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowAddressModal(false)}
                className="px-4 py-2 rounded-xl text-sm font-bold text-[#7C9D96]/70 hover:text-[#7C9D96]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddressSave}
                className="px-4 py-2 rounded-xl text-sm font-bold bg-[#F29727] text-white hover:scale-105 transition-all"
              >
                Save Address
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;