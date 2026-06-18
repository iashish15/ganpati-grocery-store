import { useState, useRef, useCallback, useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroBanner from "./components/home/HeroBanner";
import CategoryBar from "./components/home/CategoryBar";
import CategorySection from "./components/products/CategorySection";
import CartDrawer from "./components/cart/CartDrawer";
import CartFAB from "./components/cart/CartFAB";
import { categories, products } from "./data/products";

function AppInner() {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const sectionRefs = useRef({});

  const productsByCategory = categories.reduce((acc, cat) => {
    acc[cat.id] = products.filter((p) => p.categoryId === cat.id);
    return acc;
  }, {});

  const scrollToCategory = useCallback((id) => {
    setActiveCategory(id);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navbar
        onCartOpen={() => setCartOpen(true)}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
      />

      <main>
        <HeroBanner onShopNow={() => scrollToCategory("grains-pulses")} />
        <CategoryBar onCategoryClick={scrollToCategory} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron-200 to-transparent" />
            <span className="text-xs font-semibold text-saffron-500 tracking-widest uppercase px-2">
              All Products
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-saffron-200 to-transparent" />
          </div>
        </div>

        {categories.map((cat, i) => (
          <div key={cat.id}>
            <CategorySection
              category={cat}
              products={productsByCategory[cat.id] || []}
              sectionRef={(el) => (sectionRefs.current[cat.id] = el)}
            />
            {i < categories.length - 1 && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </main>

      <Footer />

      {/* Cart */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <CartFAB onOpen={() => setCartOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}
