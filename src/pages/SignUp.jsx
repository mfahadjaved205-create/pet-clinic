import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
    .font-display { font-family: 'Fredoka', sans-serif; }
    .font-body { font-family: 'Poppins', sans-serif; }
  `}</style>
);

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // Save token and user info
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ _id: data._id, name: data.name, email: data.email }));

      setLoading(false);
      navigate("/signin");
    } catch (err) {
      setError("Could not connect to server. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Fonts />

      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          pt-28
          pb-20
          px-4
          overflow-hidden
          bg-[#F4EEE1]
        "
      >
        {/* Decorative Blobs */}
        <div
          className="
            absolute
            top-20
            left-0
            sm:left-10
            w-40
            h-40
            sm:w-64
            sm:h-64
            bg-[#F2A22C]/10
            rounded-full
            blur-3xl
            -z-10
          "
        ></div>

        <div
          className="
            absolute
            bottom-20
            right-0
            sm:right-10
            w-56
            h-56
            sm:w-96
            sm:h-96
            bg-[#71877B]/10
            rounded-full
            blur-3xl
            -z-10
          "
        ></div>

        {/* Card */}
        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            sm:p-10
          "
        >
          <h1
            className="
              font-display
              font-semibold
              text-[28px]
              sm:text-[34px]
              text-center
              text-[#71877B]
            "
          >
            Create Account
          </h1>

          <p
            className="
              font-body
              text-[13px]
              sm:text-[14px]
              text-center
              text-[#71877B]/70
              mt-2
              mb-8
            "
          >
            Join us and give your pet the care it deserves.
          </p>

          {error && (
            <div
              className="
                font-body
                text-sm
                text-red-600
                bg-red-50
                border
                border-red-200
                rounded-xl
                px-4
                py-3
                mb-4
                text-center
              "
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-body text-sm font-semibold text-[#71877B]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="
                  font-body
                  w-full
                  mt-1
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#F4EEE1]
                  text-[#71877B]
                  placeholder-[#71877B]/40
                  outline-none
                  focus:ring-2
                  focus:ring-[#F2A22C]
                "
              />
            </div>

            <div>
              <label className="font-body text-sm font-semibold text-[#71877B]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="
                  font-body
                  w-full
                  mt-1
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#F4EEE1]
                  text-[#71877B]
                  placeholder-[#71877B]/40
                  outline-none
                  focus:ring-2
                  focus:ring-[#F2A22C]
                "
              />
            </div>

            <div>
              <label className="font-body text-sm font-semibold text-[#71877B]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="
                  font-body
                  w-full
                  mt-1
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#F4EEE1]
                  text-[#71877B]
                  placeholder-[#71877B]/40
                  outline-none
                  focus:ring-2
                  focus:ring-[#F2A22C]
                "
              />
            </div>

            <div>
              <label className="font-body text-sm font-semibold text-[#71877B]">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="
                  font-body
                  w-full
                  mt-1
                  px-4
                  py-3
                  rounded-2xl
                  bg-[#F4EEE1]
                  text-[#71877B]
                  placeholder-[#71877B]/40
                  outline-none
                  focus:ring-2
                  focus:ring-[#F2A22C]
                "
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                font-body
                w-full
                mt-2
                py-3
                bg-[#F2A22C]
                text-white
                rounded-2xl
                font-bold
                shadow-lg
                hover:scale-[1.02]
                active:scale-95
                transition-transform
                disabled:opacity-60
                disabled:hover:scale-100
              "
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="font-body text-center text-sm text-[#71877B]/70 mt-6">
            Already have an account?{" "}
            <NavLink to="/signin" className="text-[#F2A22C] font-bold">
              Sign In
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
