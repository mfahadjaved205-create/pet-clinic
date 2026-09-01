
import React, { useState } from "react";
import { Heart, Plus } from "lucide-react";
import { NavLink } from "react-router";

const Products = () => {
  // =========================
  // Product Data
  // =========================
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Rope Toy",
      category: "Toys",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Organic Salmon Treats",
      category: "Food",
      price: 18.5,
      image:
        "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Gentle Paw Balm",
      category: "Care",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Cloud Comfort Bed",
      category: "Care",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=400",
    },
  ];

  // =========================
  // State
  // =========================
  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const [wishlist, setWishlist] = useState([]);

  // =========================
  // Category Filter
  // =========================
  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  // =========================
  // Wishlist Function
  // =========================
  const toggleWishlist = (id) => {
    setWishlist((previousWishlist) => {
      if (previousWishlist.includes(id)) {
        return previousWishlist.filter(
          (productId) => productId !== id
        );
      }

      return [...previousWishlist, id];
    });
  };

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">

      {/* =========================
          SHOP SECTION
      ========================= */}
      <section
        id="the_pawsitive_shop"
        className="py-20 sm:py-28 lg:py-40 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">

          {/* =========================
              SHOP HEADER
          ========================= */}
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7C9D96] mb-4">
              The Pawsitive{" "}
              <span className="text-[#F29727]">
                Shop.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#7C9D96]/60 font-medium">
              Curated essentials for a happy, healthy pet.
            </p>
          </div>

          {/* =========================
              CATEGORY BUTTONS
          ========================= */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
            {[
              "All Products",
              "Toys",
              "Food",
              "Care",
            ].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`
                  px-5 sm:px-6
                  py-3
                  rounded-2xl
                  font-bold
                  text-sm
                  transition-all
                  duration-300
                  ${
                    selectedCategory === category
                      ? "bg-[#7C9D96] text-white shadow-[8px_8px_16px_rgba(124,157,150,0.25)]"
                      : "bg-white text-[#7C9D96] shadow-[8px_8px_20px_rgba(0,0,0,0.05)] hover:bg-[#7C9D96] hover:text-white hover:-translate-y-1"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* =========================
              PRODUCTS GRID
          ========================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="
                  bg-white
                  rounded-[30px]
                  p-5 sm:p-6
                  group
                  shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                {/* =========================
                    PRODUCT IMAGE
                ========================= */}
                <div
                  className="
                    aspect-square
                    rounded-[30px]
                    overflow-hidden
                    mb-6
                    bg-[#F7F1E5]
                    relative
                    shadow-[inset_5px_5px_12px_rgba(0,0,0,0.06),inset_-5px_-5px_12px_rgba(255,255,255,0.8)]
                  "
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />

                  {/* =========================
                      WISHLIST BUTTON
                  ========================= */}
                  <button
                    type="button"
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    aria-label={`Add ${product.name} to wishlist`}
                    className="
                      absolute
                      top-4
                      right-4
                      w-10
                      h-10
                      bg-white
                      rounded-full
                      flex
                      items-center
                      justify-center
                      text-[#F29727]
                      shadow-lg
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-300
                      hover:scale-110
                    "
                  >
                    <Heart
                      className={`
                        w-5
                        h-5
                        transition-all
                        ${
                          wishlist.includes(product.id)
                            ? "fill-[#F29727]"
                            : ""
                        }
                      `}
                    />
                  </button>
                </div>

                {/* =========================
                    PRODUCT INFORMATION
                ========================= */}
                <h3 className="font-bold text-lg mb-1 text-[#354B47]">
                  {product.name}
                </h3>

                <p className="text-[#7C9D96]/40 text-sm mb-4 font-bold uppercase tracking-wide">
                  {product.category}
                </p>

                {/* =========================
                    PRICE + ADD TO CART
                ========================= */}
                <div className="flex justify-between items-center">

                  <span className="text-xl font-bold text-[#F29727]">
                    ${product.price.toFixed(2)}
                  </span>

                  {/* ADD TO CART */}
                  <NavLink
                    to="/cart"
                    aria-label={`Add ${product.name} to cart`}
                    className="
                      w-10
                      h-10
                      bg-[#7C9D96]
                      text-white
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      hover:scale-110
                      hover:bg-[#668981]
                      transition-all
                      duration-300
                    "
                  >
                    <Plus className="w-6 h-6" />
                  </NavLink>

                </div>

              </div>
            ))}

          </div>

          {/* =========================
              NO PRODUCTS MESSAGE
          ========================= */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-[#7C9D96]">
                No products found
              </h2>

              <p className="mt-2 text-[#7C9D96]/60">
                Try selecting another category.
              </p>
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default Products;
