import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const Add = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

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
                className="w-full py-4 bg-[#F29727] text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Add;