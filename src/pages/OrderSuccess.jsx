import React, { useEffect, useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  X,
  CreditCard,
  Lock,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";

// =========================
// Card brand detect karna number ke prefix se
// =========================
const detectCardBrand = (number) => {
  const digits = number.replace(/\s/g, "");
  if (/^4/.test(digits)) return "Visa";
  if (/^5[1-5]/.test(digits)) return "Mastercard";
  if (/^3[47]/.test(digits)) return "American Express";
  if (/^6(?:011|5)/.test(digits)) return "Discover";
  return "Card";
};

const generateOrderId = () => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `ORD-${random}`;
};

// =========================
// Payment Modal Component
// =========================
const PaymentModal = ({ total, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState("");
  const [success, setSuccess] = useState(false);

  const cardBrand = detectCardBrand(form.cardNumber);

  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const handleChange = (field, value) => {
    let formatted = value;

    if (field === "cardNumber") formatted = formatCardNumber(value);
    if (field === "expiry") formatted = formatExpiry(value);
    if (field === "cvv") formatted = value.replace(/\D/g, "").slice(0, 3);

    setForm((prev) => ({ ...prev, [field]: formatted }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Enter the name on card.";
    }

    const cardDigits = form.cardNumber.replace(/\s/g, "");
    if (cardDigits.length !== 16) {
      newErrors.cardNumber = "Enter a valid 16-digit card number.";
    }

    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) {
      newErrors.expiry = "Use MM/YY format.";
    } else {
      const [month, year] = form.expiry.split("/").map(Number);
      const now = new Date();
      const currentYear = now.getFullYear() % 100;
      const currentMonth = now.getMonth() + 1;

      if (month < 1 || month > 12) {
        newErrors.expiry = "Enter a valid month.";
      } else if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        newErrors.expiry = "Card has expired.";
      }
    }

    if (form.cvv.length !== 3) {
      newErrors.cvv = "Enter a valid 3-digit CVV.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setProcessing(true);
    setProcessingStep("Verifying card details...");

    // Realistic multi-step processing simulate karna
    setTimeout(() => {
      setProcessingStep("Contacting your bank...");
    }, 900);

    setTimeout(() => {
      setProcessingStep("Confirming payment...");
    }, 1800);

    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);

      const cardDigits = form.cardNumber.replace(/\s/g, "");

      setTimeout(() => {
        onSuccess({
          orderId: generateOrderId(),
          cardBrand,
          cardLast4: cardDigits.slice(-4),
          date: new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        });
      }, 1600);
    }, 2600);
  };

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-[28px] w-full max-w-md p-6 sm:p-8 relative shadow-2xl">
        {!success && (
          <button
            type="button"
            onClick={onClose}
            disabled={processing}
            aria-label="Close payment modal"
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full text-[#7C9D96] hover:bg-[#F7F1E5] transition-colors disabled:opacity-40"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {success ? (
          // ===== Success View =====
          <div className="py-8 text-center">
            <div className="w-20 h-20 bg-[#7C9D96]/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-[pulse_1.5s_ease-in-out]">
              <svg
                className="w-11 h-11 text-[#7C9D96]"
                viewBox="0 0 52 52"
                fill="none"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                <path
                  d="M15 27l7 7 15-15"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="40"
                  strokeDashoffset="40"
                  style={{
                    animation: "dash 0.5s ease-out 0.3s forwards",
                  }}
                />
              </svg>
            </div>
            <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
            <h2 className="text-2xl font-bold text-[#354B47] mb-2">
              Payment successful
            </h2>
            <p className="text-[#7C9D96]/70 font-medium">
              You paid ${total.toFixed(2)} with {cardBrand}. Redirecting to
              your order...
            </p>
          </div>
        ) : processing ? (
          // ===== Processing View =====
          <div className="py-14 text-center">
            <div className="w-16 h-16 border-4 border-[#F7F1E5] border-t-[#F29727] rounded-full animate-spin mx-auto mb-6"></div>
            <h2 className="text-lg font-bold text-[#354B47] mb-1">
              {processingStep}
            </h2>
            <p className="text-sm text-[#7C9D96]/60 font-medium">
              Please don't close this window.
            </p>
          </div>
        ) : (
          // ===== Payment Form =====
          <>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 bg-[#F29727]/10 rounded-2xl flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-[#F29727]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#354B47]">
                  Payment details
                </h2>
                <p className="text-sm text-[#7C9D96]/60 font-medium">
                  Total due: ${total.toFixed(2)}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
              <div>
                <label className="block text-sm font-semibold text-[#354B47] mb-1.5">
                  Name on card
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-2xl bg-[#F7F1E5] font-medium text-[#354B47] placeholder-[#7C9D96]/40 outline-none focus:ring-2 focus:ring-[#F29727]/40 transition-all ${
                    errors.name ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs font-semibold mt-1.5">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-semibold text-[#354B47]">
                    Card number
                  </label>
                  {form.cardNumber.replace(/\s/g, "").length >= 1 && (
                    <span className="text-xs font-bold text-[#F29727] bg-[#F29727]/10 px-2 py-0.5 rounded-full">
                      {cardBrand}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.cardNumber}
                  onChange={(e) => handleChange("cardNumber", e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className={`w-full px-4 py-3 rounded-2xl bg-[#F7F1E5] font-medium text-[#354B47] placeholder-[#7C9D96]/40 outline-none focus:ring-2 focus:ring-[#F29727]/40 transition-all ${
                    errors.cardNumber ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs font-semibold mt-1.5">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#354B47] mb-1.5">
                    Expiry
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.expiry}
                    onChange={(e) => handleChange("expiry", e.target.value)}
                    placeholder="MM/YY"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F7F1E5] font-medium text-[#354B47] placeholder-[#7C9D96]/40 outline-none focus:ring-2 focus:ring-[#F29727]/40 transition-all ${
                      errors.expiry ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {errors.expiry && (
                    <p className="text-red-500 text-xs font-semibold mt-1.5">
                      {errors.expiry}
                    </p>
                  )}
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-semibold text-[#354B47] mb-1.5">
                    CVV
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.cvv}
                    onChange={(e) => handleChange("cvv", e.target.value)}
                    placeholder="123"
                    className={`w-full px-4 py-3 rounded-2xl bg-[#F7F1E5] font-medium text-[#354B47] placeholder-[#7C9D96]/40 outline-none focus:ring-2 focus:ring-[#F29727]/40 transition-all ${
                      errors.cvv ? "ring-2 ring-red-400" : ""
                    }`}
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-xs font-semibold mt-1.5">
                      {errors.cvv}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 bg-[#F29727] text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
              >
                Pay ${total.toFixed(2)}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-[#7C9D96]/50 font-medium pt-1">
                <Lock className="w-3.5 h-3.5" />
                This is a demo checkout — no real charge is made.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// =========================
// Cart Page
// =========================
const Add = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Could not load your cart.");
          setLoading(false);
          return;
        }

        setCart(data);
        setLoading(false);
      } catch (err) {
        setError("Could not connect to server.");
        setLoading(false);
      }
    };

    fetchCart();
  }, [token, navigate]);

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setUpdatingId(productId);

    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ quantity: newQuantity }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCart(data);
      }
    } catch (err) {
      setError("Could not update item.");
    } finally {
      setUpdatingId(null);
    }
  };

  const removeItem = async (productId) => {
    setUpdatingId(productId);

    try {
      const response = await fetch(
        `http://localhost:5000/api/cart/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setCart(data);
      }
    } catch (err) {
      setError("Could not remove item.");
    } finally {
      setUpdatingId(null);
    }
  };

  const total =
    cart?.items?.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ) || 0;

  const itemCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  const handlePaymentSuccess = (orderMeta) => {
    setShowPayment(false);

    navigate("/order-success", {
      state: {
        order: {
          ...orderMeta,
          items: cart.items,
          total,
        },
      },
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F1E5] flex items-center justify-center">
        <p className="text-[#7C9D96] text-lg font-semibold">
          Loading your cart...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <section className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#7C9D96] mb-2">
              Your <span className="text-[#F29727]">Cart.</span>
            </h1>
            <p className="text-[#7C9D96]/60 font-medium">
              {itemCount > 0
                ? `${itemCount} item${itemCount > 1 ? "s" : ""} in your cart`
                : "Your cart is waiting to be filled"}
            </p>
          </div>

          <NavLink
            to="/shop"
            className="hidden sm:flex items-center gap-2 bg-white px-5 py-3 rounded-2xl font-bold text-sm shadow-[8px_8px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </NavLink>
        </div>

        {error && (
          <div className="mb-8 bg-red-50 text-red-600 rounded-2xl px-6 py-4 font-semibold">
            {error}
          </div>
        )}

        {/* Empty Cart */}
        {!error && (!cart || !cart.items || cart.items.length === 0) && (
          <div className="bg-white rounded-[30px] py-20 px-6 text-center shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">
            <div className="w-20 h-20 bg-[#7C9D96]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-9 h-9 text-[#7C9D96]" />
            </div>
            <h2 className="text-2xl font-bold text-[#7C9D96] mb-2">
              Your cart is empty
            </h2>
            <p className="text-[#7C9D96]/60 mb-8">
              Looks like you haven't added anything yet.
            </p>
            <NavLink
              to="/shop"
              className="inline-block px-8 py-4 bg-[#F29727] text-white rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Start Shopping
            </NavLink>
          </div>
        )}

        {/* Cart Items + Summary */}
        {cart && cart.items && cart.items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Items List */}
            <div className="lg:col-span-2 space-y-5">
              {cart.items.map((item) => (
                <div
                  key={item.productId}
                  className={`bg-white rounded-[25px] p-4 sm:p-5 flex items-center gap-4 sm:gap-6 shadow-[12px_12px_30px_rgba(0,0,0,0.05),-12px_-12px_30px_rgba(255,255,255,0.8)] transition-opacity ${
                    updatingId === item.productId ? "opacity-50" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden bg-[#F7F1E5]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#7C9D96]/30">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-[#354B47] truncate">
                      {item.name}
                    </h3>
                    <p className="text-[#F29727] font-bold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 bg-[#F7F1E5] px-3 py-2 rounded-2xl shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      disabled={updatingId === item.productId}
                      className="text-[#7C9D96] hover:text-[#F29727] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="font-bold w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      disabled={updatingId === item.productId}
                      className="text-[#7C9D96] hover:text-[#F29727] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    disabled={updatingId === item.productId}
                    aria-label={`Remove ${item.name}`}
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-[#E77B72] hover:bg-[#E77B72]/10 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-[30px] p-6 sm:p-8 shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)] lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#7C9D96] mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#7C9D96]/70 font-medium">
                  <span>Subtotal ({itemCount} items)</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#7C9D96]/70 font-medium">
                  <span>Shipping</span>
                  <span className="text-[#F29727] font-bold">Free</span>
                </div>
              </div>

              <div className="border-t border-[#7C9D96]/10 pt-5 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#7C9D96]">Total</span>
                  <span className="text-2xl font-bold text-[#F29727]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPayment(true)}
                className="w-full py-4 bg-[#F29727] text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>

      {showPayment && (
        <PaymentModal
          total={total}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </main>
  );
};

export default Add;