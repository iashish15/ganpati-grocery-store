import { useState, useEffect } from "react";
import { ShoppingCart, Store, Menu, X, ChevronRight } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { categories } from "../../data/products";

export default function Navbar({
  onCartOpen,
  activeCategory,
  onCategoryClick,
}) {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        {/* Top bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/ganpati_kirana_logo.png"
                alt="Ganpati Kirana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div>
              <p className="font-display font-bold text-lg text-gray-900 leading-tight">
                Ganpati
              </p>
              <p className="text-[10px] font-medium text-saffron-600 leading-tight tracking-widest uppercase">
                Kirana Store
              </p>
            </div> */}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCartOpen}
              className="relative flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">My Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-saffron-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* <div className="hidden md:flex items-center justify-center gap-4">
          <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            ✅ No Signup Required
          </div>

          <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
            🛒 Order on WhatsApp
          </div>

          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            ⚡ Fast Delivery
          </div>

          <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            🏪 Trusted Since 1985
          </div>
        </div> */}
        <div className="flex-1 overflow-hidden">
          <div className="relative overflow-hidden  bg-gradient-to-r from-orange-50 via-white to-green-50 border border-orange-100 px-2 py-2">
            <div
              className="flex whitespace-nowrap"
              style={{
                animation: "premiumMarquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  {[
                    {
                      icon: "🛒",
                      text: "Order Directly on WhatsApp",
                    },
                    {
                      icon: "⚡",
                      text: "Fast Home Delivery",
                    },
                    {
                      icon: "🚫",
                      text: "No Signup Required",
                    },
                    {
                      icon: "🚫",
                      text: "No Login Required",
                    },
                    {
                      icon: "✨",
                      text: "Simple Shopping",
                    },
                    {
                      icon: "😌",
                      text: "No Hassle",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white shadow-sm border border-gray-100 rounded-full px-4 py-2 mx-2"
                    >
                      <span className="text-base">{item.icon}</span>
                      <span className="text-xs font-semibold text-gray-700">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Fade Effect */}
            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          <style>{`
    @keyframes premiumMarquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
        </div>

        {/* Category pill bar */}
        {/* <div className="border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex gap-2 overflow-x-auto hide-scrollbar py-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryClick(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-saffron-500 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-saffron-100 hover:text-saffron-700"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div> */}
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-saffron-400 to-saffron-600 flex items-center justify-center">
                  <Store className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-base">
                    Ganpati Kirana
                  </p>
                  <p className="text-[10px] text-saffron-600 tracking-widest uppercase">
                    Store
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Categories
              </p>
              <div className="space-y-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onCategoryClick(cat.id);
                      setMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-saffron-50 text-gray-700 hover:text-saffron-700 transition text-sm font-medium"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base">{cat.emoji}</span>
                      {cat.label}
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
