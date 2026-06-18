import { MessageCircle, ShieldCheck, Clock, Truck } from "lucide-react";
import heroBgDesktop from "../../../public/desktopbg.png";
import heroBgMobile from "../../../public/mobilebg.png";

const badges = [
  { icon: ShieldCheck, label: "Trusted Quality" },
  { icon: Clock, label: "Open 7 Days" },
  { icon: Truck, label: "Home Delivery" },
  { icon: MessageCircle, label: "WhatsApp Orders" },
];

const marqueeItems = [
  "🌾 Basmati Rice",
  "🧂 Garam Masala",
  "🛢️ Mustard Oil",
  "🥛 Amul Dairy",
  "🫖 Tata Chai",
  "🌶️ Lal Mirch",
  "🍪 Parle-G",
  "🧴 Surf Excel",
  "🟡 Haldi Powder",
  "🥜 Kaju & Badam",
  "🍚 Poha & Sabudana",
  "🕯️ Agarbatti",
  "🧂 Tata Salt",
  "🍫 Cadbury",
  "🥤 Pepsi & Sprite",
  "🫙 Besan & Maida",
];

const bgItems = [
  { emoji: "🌶️", top: "8%", left: "3%", size: 38, rot: -15, op: 0.13 },
  { emoji: "🧄", top: "15%", left: "88%", size: 34, rot: 20, op: 0.12 },
  { emoji: "🌾", top: "5%", left: "55%", size: 42, rot: 10, op: 0.1 },
  { emoji: "🫙", top: "72%", left: "6%", size: 36, rot: -10, op: 0.11 },
  { emoji: "🥛", top: "65%", left: "82%", size: 34, rot: 15, op: 0.12 },
  { emoji: "🍃", top: "40%", left: "92%", size: 30, rot: -20, op: 0.1 },
  { emoji: "🌿", top: "82%", left: "45%", size: 32, rot: 12, op: 0.09 },
  { emoji: "🧅", top: "30%", left: "1%", size: 30, rot: 8, op: 0.1 },
  { emoji: "🫚", top: "55%", left: "60%", size: 28, rot: -8, op: 0.08 },
  { emoji: "🍋", top: "20%", left: "72%", size: 32, rot: 18, op: 0.1 },
  { emoji: "🌰", top: "88%", left: "18%", size: 28, rot: -12, op: 0.09 },
  { emoji: "🫛", top: "48%", left: "78%", size: 30, rot: 22, op: 0.08 },
];

export default function HeroBanner({ onShopNow }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgDesktop})`,
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgMobile})`,
        }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/30" />

      {/* Warm Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(249,125,7,0.10), transparent 40%)",
        }}
      />

      {/* Luxury Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
      repeating-linear-gradient(
        0deg,
        #92400e 0px,
        #92400e 1px,
        transparent 1px,
        transparent 60px
      ),
      repeating-linear-gradient(
        90deg,
        #92400e 0px,
        #92400e 1px,
        transparent 1px,
        transparent 60px
      )
    `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center max-w-7xl mx-auto px-0 sm:px-6 py-8 md:py-0">
        <div className="max-w-2xl bg-white/20 backdrop-blur-[2px] rounded-3xl p-6 md:p-8">
          <div className="inline-flex items-center gap-2 bg-saffron-100/90 text-saffron-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 border border-saffron-200">
            <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full animate-pulse" />
            Your Neighbourhood Kirana Store Since 1985
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-tight mb-4">
            Sab Kuch Milega,{" "}
            <span className="text-saffron-500 relative inline-block">
              Yahan!
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6 Q100 2 198 6"
                  stroke="#f97d07"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
            Browse 136+ daily essentials — groceries, spices, dairy, snacks &
            more. Add items to your cart and send your order straight to our
            WhatsApp!
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button
              onClick={onShopNow}
              className="flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              🛍️ Shop Now
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-saffron-500" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 bg-saffron-500 overflow-hidden py-2.5 border-t border-saffron-400">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-saffron-500 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-saffron-500 to-transparent z-10 pointer-events-none" />
        <div
          className="flex"
          style={{
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center text-white font-semibold text-sm whitespace-nowrap px-5"
            >
              {item}
              <span className="ml-5 text-saffron-200 text-xs">✦</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
