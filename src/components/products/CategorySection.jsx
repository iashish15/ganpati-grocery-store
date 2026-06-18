import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "./ProductCard";

export default function CategorySection({ category, products, sectionRef }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? products : products.slice(0, 8);
  const hasMore = products.length > 8;

  return (
    <section
      ref={sectionRef}
      id={category.id}
      className="category-section max-w-7xl mx-auto px-4 sm:px-6 py-8"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-saffron-500 rounded-full" />
          <div>
            <h2 className="font-display font-bold text-xl text-gray-900 flex items-center gap-2">
              <span className="text-2xl">{category.emoji}</span>
              {category.label}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {products.length} items available
            </p>
          </div>
        </div>
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-saffron-600 hover:text-saffron-700 text-xs font-semibold transition-colors"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" /> See all {products.length}
              </>
            )}
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-saffron-600 hover:text-saffron-700 bg-saffron-50 hover:bg-saffron-100 px-5 py-2 rounded-full border border-saffron-200 transition-all duration-200"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" /> Show less
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" /> View all{" "}
                {products.length} items
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
