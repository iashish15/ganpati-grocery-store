import React, { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    if (document.querySelector('script[src="https://embed.wiserreview.com/embed/6a44e5a4a5cc12bb523b48bb/widget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://embed.wiserreview.com/embed/6a44e5a4a5cc12bb523b48bb/widget.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-cream">
      {/* Background Decoration */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-saffron-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-saffron-100 text-saffron-700 font-semibold shadow-card">
            ⭐ Google Reviews
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl font-display font-bold text-gray-900">
            Trusted by Our Customers
          </h2>

          <div className="w-24 h-1 bg-saffron-500 rounded-full mx-auto mt-5"></div>

          <p className="mt-6 text-m text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Genuine Google Reviews from shoppers who trust Ganpati Kirana Store.
          </p>

        </div>

        {/* Reviews Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[35px]
            bg-white
            border
            border-orange-100
            shadow-card
            hover:shadow-2xl
            transition-all
            duration-500
            p-4
            md:p-8
          "
        >
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-saffron-500 via-yellow-400 to-forest-500"></div>

          {/* Decorative Background */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-saffron-100 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-forest-100 opacity-20 blur-3xl"></div>

          {/* WiserReview Widget */}
          <div className="relative z-10 min-h-[300px]">
            <div
              data-type="carousel"
              className="wiser_review_carousel"
              data-id="6a44e5a4a5cc12bb523b48bb"
            ></div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            ⭐ Thank you for supporting{" "}
            <span className="font-semibold text-forest-700">
              Ganpati Kirana Store
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;