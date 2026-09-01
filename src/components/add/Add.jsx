
import React, { useState } from "react";
import {
  Minus,
  Plus,
  Truck,
  RotateCcw,
  ShoppingCart,
  Check,
} from "lucide-react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = {
    name: "Eco-Friendly Rope Toy",
    category: "Toys",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=800",
    description:
      "Made from 100% natural cotton fibers, this durable rope toy is perfect for heavy chewers and interactive play. Safe, sustainable, and designed to keep your pet's teeth clean.",
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    setAddedToCart(false);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    setAddedToCart(false);
  };

  const addToCart = () => {
    setAddedToCart(true);

    // Example JavaScript cart logic
    console.log("Added to cart:", {
      product: product.name,
      quantity,
      total: (product.price * quantity).toFixed(2),
    });

    // Hide success message after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center mt-10">
          
          {/* Product Image */}
          <div className="clay-card p-4 sm:p-6 lg:p-8 bg-[#F7F1E5] rounded-[30px] shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]">
            <div className="aspect-square rounded-[25px] sm:rounded-[30px] overflow-hidden shadow-[inset_8px_8px_16px_rgba(0,0,0,0.08),inset_-8px_-8px_16px_rgba(255,255,255,0.8)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-7 sm:space-y-8">
            
            {/* Title and Price */}
            <div>
              <p className="text-[#F29727] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-2">
                {product.category}
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7C9D96] leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-2xl sm:text-3xl font-bold text-[#F29727]">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#7C9D96]/70 font-medium leading-relaxed">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="space-y-4">
              <p className="font-bold text-[#7C9D96]/40 uppercase tracking-wider text-sm">
                Quantity
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                
                {/* Quantity Counter */}
                <div className="flex items-center justify-center gap-5 bg-white px-5 sm:px-6 py-3 rounded-2xl shadow-[8px_8px_16px_rgba(0,0,0,0.05),-8px_-8px_16px_rgba(255,255,255,0.8)]">
                  
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="text-[#7C9D96] hover:text-[#F29727] transition-colors p-1 hover:scale-110"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-5 h-5" />
                  </button>

                  <span className="font-bold text-xl w-8 text-center text-[#7C9D96]">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="text-[#7C9D96] hover:text-[#F29727] transition-colors p-1 hover:scale-110"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Add To Cart */}
                <button
                  type="button"
                  onClick={addToCart}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 ${
                    addedToCart
                      ? "bg-[#7C9D96]"
                      : "bg-[#F29727]"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Product Features */}
            <div className="pt-6 sm:pt-8 border-t border-[#7C9D96]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Shipping */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#7C9D96]/10 rounded-2xl flex items-center justify-center text-[#7C9D96] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                  <Truck className="w-6 h-6" />
                </div>

                <div>
                  <p className="font-bold text-sm text-[#7C9D96]">
                    Fast Shipping
                  </p>

                  <p className="text-xs text-[#7C9D96]/60 mt-1">
                    2-3 business days
                  </p>
                </div>
              </div>

              {/* Returns */}
              <div className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#7C9D96]/10 rounded-2xl flex items-center justify-center text-[#7C9D96] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]">
                  <RotateCcw className="w-6 h-6" />
                </div>

                <div>
                  <p className="font-bold text-sm text-[#7C9D96]">
                    Easy Returns
                  </p>

                  <p className="text-xs text-[#7C9D96]/60 mt-1">
                    30-day guarantee
                  </p>
                </div>
              </div>
            </div>

            {/* Cart Total */}
            <div className="bg-white/60 rounded-2xl p-4 sm:p-5 shadow-[8px_8px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#7C9D96]/70">
                  Total
                </span>

                <span className="text-xl sm:text-2xl font-bold text-[#F29727]">
                  ${(product.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Add;
