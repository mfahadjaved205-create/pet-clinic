
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Share2,
  Check,
} from "lucide-react";

const Detail = () => {
  const [scrolled, setScrolled] = useState(0);
  const [copied, setCopied] = useState(false);

  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("article-content");

      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const scrollPosition = window.scrollY;

      const progress =
        ((scrollPosition - articleTop + window.innerHeight / 2) /
          articleHeight) *
        100;

      setScrolled(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Go back
  const handleBack = () => {
    window.history.back();
  };

  // Share article
  const handleShare = async () => {
    const shareData = {
      title: "5 Tips for Stress-Free Home Grooming",
      text: "Check out these helpful grooming tips for your pet!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.log("Sharing cancelled.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#7C9D96] font-sans antialiased">
      
      {/* Reading Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#F29727] z-50 transition-all duration-150"
        style={{ width: `${scrolled}%` }}
      />

      <main className="pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6" >
        
        <article
          id="article-content"
          className="max-w-4xl mx-auto"
        >

          {/* Back + Share Buttons */}
          <div className="flex items-center justify-between mb-8 mt-8">
            
            <button
              onClick={handleBack}
              className="
                flex items-center gap-2
                px-4 py-2.5
                bg-white/80
                rounded-2xl
                text-[#7C9D96]
                font-bold
                shadow-[6px_6px_15px_rgba(0,0,0,0.05)]
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              <ArrowLeft size={18} />
              <span className="hidden sm:inline">
                Back
              </span>
            </button>

            <button
              onClick={handleShare}
              className="
                flex items-center gap-2
                px-4 py-2.5
                bg-[#F29727]
                text-white
                rounded-2xl
                font-bold
                shadow-[8px_8px_16px_rgba(242,151,39,0.2)]
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              {copied ? (
                <>
                  <Check size={18} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={18} />
                  <span className="hidden sm:inline">
                    Share
                  </span>
                </>
              )}
            </button>

          </div>

          {/* Article Header */}
          <div className="text-center mb-10 sm:mb-12">

            {/* Category + Date */}
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-5 sm:mb-6">

              <span
                className="
                  px-4 py-1.5
                  bg-[#F29727]/10
                  text-[#F29727]
                  text-xs sm:text-sm
                  font-bold
                  rounded-full
                  uppercase
                  tracking-wide
                "
              >
                Grooming
              </span>

              <span className="text-[#7C9D96]/40 text-xs sm:text-sm font-bold">
                Oct 12, 2023
              </span>

            </div>

            {/* Title */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                font-bold
                text-[#7C9D96]
                mb-7
                sm:mb-8
              "
            >
              5 Tips for Stress-Free Home Grooming
            </h1>

            {/* Author */}
            <div className="flex items-center justify-center gap-3 sm:gap-4">

              <img
                className="
                  w-11
                  h-11
                  sm:w-12
                  sm:h-12
                  rounded-full
                  border-2
                  border-white
                  shadow-md
                  object-cover
                "
                src="https://i.pravatar.cc/100?u=vet"
                alt="Dr. Sarah Jenkins"
              />

              <div className="text-left">

                <p className="font-bold text-[#7C9D96] text-sm sm:text-base">
                  Dr. Sarah Jenkins
                </p>

                <p className="text-[10px] sm:text-xs text-[#7C9D96]/40 font-bold uppercase tracking-wide">
                  Lead Veterinarian
                </p>

              </div>

            </div>

          </div>

          {/* Hero Image */}
          <div
            className="
              bg-white/70
              p-2
              sm:p-3
              md:p-4
              mb-10
              sm:mb-12
              rounded-[25px]
              sm:rounded-[30px]
              shadow-[20px_20px_60px_rgba(0,0,0,0.05),-20px_-20px_60px_rgba(255,255,255,0.8)]
            "
          >

            <img
              className="
                rounded-[20px]
                sm:rounded-[25px]
                md:rounded-[30px]
                w-full
                aspect-video
                object-cover
              "
              alt="Dog grooming"
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200"
            />

          </div>

          {/* Article Content */}
          <div
            className="
              space-y-7
              sm:space-y-8
              text-base
              sm:text-lg
              font-medium
              text-[#7C9D96]/70
              leading-8
              sm:leading-relaxed
            "
          >

            {/* Introduction */}
            <p>
              Grooming is an essential part of pet care, but for many
              animals, it can be a source of anxiety. Whether it's the
              sound of clippers or the sensation of water, many pets need
              a little extra patience and care during their spa sessions.
            </p>

            {/* Section 1 */}
            <section>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#7C9D96]
                  pt-2
                  sm:pt-4
                  mb-4
                "
              >
                1. Start Early and Go Slow
              </h2>

              <p>
                The best way to ensure a lifetime of easy grooming is to
                start when your pet is young. Introduce them to the
                tools—brushes, combs, and even the bathtub—without
                actually using them at first. Let them sniff and explore,
                and reward them with treats.
              </p>

            </section>

            {/* Section 2 */}
            <section>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#7C9D96]
                  pt-2
                  sm:pt-4
                  mb-4
                "
              >
                2. Use Positive Reinforcement
              </h2>

              <p>
                Treats are your best friend during grooming. Reward your
                pet for staying calm, even if it's just for a few seconds.
                Over time, they will associate grooming with positive
                experiences.
              </p>

            </section>

            {/* Quote */}
            <blockquote
              className="
                bg-white/70
                p-6
                sm:p-8
                border-l-4
                sm:border-l-8
                border-[#F29727]
                rounded-2xl
                sm:rounded-3xl
                italic
                text-lg
                sm:text-xl
                text-[#7C9D96]
                shadow-[12px_12px_30px_rgba(0,0,0,0.04)]
              "
            >
              "Patience is the most important tool in your grooming kit.
              If you're stressed, your pet will be too."
            </blockquote>

            {/* Section 3 */}
            <section>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#7C9D96]
                  pt-2
                  sm:pt-4
                  mb-4
                "
              >
                3. Keep Sessions Short
              </h2>

              <p>
                Don't try to do everything at once. If your pet is getting
                restless, stop and try again later. A five-minute brushing
                session that ends on a positive note is better than a
                twenty-minute session that ends in a struggle.
              </p>

            </section>

            {/* Section 4 */}
            <section>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#7C9D96]
                  pt-2
                  sm:pt-4
                  mb-4
                "
              >
                4. Choose the Right Tools
              </h2>

              <p>
                Using the right grooming tools can make the experience
                much more comfortable for your pet. Choose brushes,
                combs, shampoos, and clippers that are appropriate for
                your pet's coat and size.
              </p>

            </section>

            {/* Section 5 */}
            <section>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#7C9D96]
                  pt-2
                  sm:pt-4
                  mb-4
                "
              >
                5. End on a Positive Note
              </h2>

              <p>
                Always try to finish grooming with something your pet
                enjoys. Give them praise, their favorite treat, or some
                extra playtime. Ending positively helps build confidence
                and makes future grooming sessions easier.
              </p>

            </section>

            {/* Final Message */}
            <div
              className="
                mt-10
                sm:mt-12
                bg-[#7C9D96]/10
                p-6
                sm:p-8
                rounded-[25px]
                sm:rounded-[30px]
              "
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#7C9D96] mb-3">
                Remember
              </h3>

              <p>
                Every pet is different. Be patient, stay calm, and allow
                your furry friend to become comfortable at their own pace.
                With consistency and positive reinforcement, grooming can
                become a relaxing experience for both of you.
              </p>

            </div>

          </div>

          {/* Bottom Share */}
          <div
            className="
              mt-12
              sm:mt-16
              pt-8
              border-t
              border-[#7C9D96]/10
              flex
              flex-col
              sm:flex-row
              justify-between
              items-center
              gap-5
            "
          >

            <div className="text-center sm:text-left">
              <p className="text-sm text-[#7C9D96]/40 font-bold uppercase">
                Enjoyed this article?
              </p>

              <p className="text-[#7C9D96] font-bold">
                Share it with another pet parent!
              </p>
            </div>

            <button
              onClick={handleShare}
              className="
                flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                bg-[#F29727]
                text-white
                rounded-2xl
                font-bold
                shadow-[8px_8px_16px_rgba(242,151,39,0.2)]
                hover:scale-105
                active:scale-95
                transition-all
              "
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Share2 size={18} />
                  Share Article
                </>
              )}
            </button>

          </div>

        </article>

      </main>
    </div>
  );
};

export default Detail;
