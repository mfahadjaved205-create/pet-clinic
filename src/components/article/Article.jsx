
import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const Article = () => {
  const posts = [
    {
      category: "Grooming",
      categoryClass: "bg-orange-100 text-orange-500",
      date: "Oct 12, 2023",
      title: "5 Tips for Stress-Free Home Grooming",
      description:
        "Learn how to keep your pet calm and cooperative during bath time and brushing sessions at home.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600",
      hoverClass: "group-hover:text-orange-500",
      link: "/hen",
    },
    {
      category: "Health",
      categoryClass: "bg-[#7C9D96]/10 text-[#7C9D96]",
      date: "Oct 08, 2023",
      title: "Understanding Your Pet's Vaccinations",
      description:
        "A comprehensive guide to which vaccines your pet needs and why they are essential for long-term health.",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&q=80&w=600",
      hoverClass: "group-hover:text-[#7C9D96]",
      link: "/hen",
    },
    {
      category: "Lifestyle",
      categoryClass: "bg-red-100 text-red-400",
      date: "Oct 05, 2023",
      title: "The Benefits of Socialization for Dogs",
      description:
        "Why daycare and playdates are vital for your dog's mental health and behavioral development.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=600",
      hoverClass: "group-hover:text-red-400",
      link: "/hen",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
      <section
        id="the_pawsitive_journal"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto mt-20">

          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                text-[#7C9D96]
                mb-6
              "
            >
              The Pawsitive{" "}
              <span className="text-[#F29727]">Journal.</span>
            </h1>

            <p
              className="
                text-base
                sm:text-lg
                lg:text-xl
                text-[#7C9D96]/60
                font-medium
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Expert advice, heartwarming stories, and tips for being the best
              pet parent you can be.
            </p>
          </div>

          {/* Blog Cards */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-8
              lg:gap-12
            "
          >
            {posts.map((post, index) => (
              <article
                key={index}
                className="
                  bg-white
                  rounded-[30px]
                  overflow-hidden
                  group
                  shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
                  border
                  border-white/50
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                {/* Image */}
                <div
                  className="
                    aspect-video
                    overflow-hidden
                    m-4
                    rounded-[30px]
                    shadow-[inset_4px_4px_12px_rgba(0,0,0,0.08)]
                  "
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-110
                      transition-transform
                      duration-500
                    "
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 pt-2 sm:pt-4">

                  {/* Category + Date */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                    <span
                      className={`
                        px-3
                        py-1
                        ${post.categoryClass}
                        text-xs
                        font-bold
                        rounded-full
                        uppercase
                      `}
                    >
                      {post.category}
                    </span>

                    <span className="text-[#7C9D96]/40 text-xs font-bold">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`
                      text-xl
                      sm:text-2xl
                      font-bold
                      text-[#7C9D96]
                      mb-4
                      ${post.hoverClass}
                      transition-colors
                      leading-tight
                    `}
                  >
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p
                    className="
                      text-[#7C9D96]/60
                      font-medium
                      mb-6
                      leading-relaxed
                      line-clamp-3
                    "
                  >
                    {post.description}
                  </p>

                  {/* Read More */}
                  <NavLink
                    to={post.link}
                    className="
                      font-bold
                      text-[#7C9D96]
                      flex
                      items-center
                      gap-2
                      group-hover:gap-4
                      transition-all
                    "
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </NavLink>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Article;
