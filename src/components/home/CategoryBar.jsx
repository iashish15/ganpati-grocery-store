import { categories } from "../../data/products";

export default function CategoryBar({ onCategoryClick }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-6">
        <h2 className="font-display font-bold text-2xl text-gray-900">
          Shop by Category
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          {categories.length} categories of daily essentials
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryClick(cat.id)}
            className="group flex flex-col items-center gap-2 bg-white hover:bg-saffron-50 border border-gray-100 hover:border-saffron-200 rounded-2xl p-4 transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
              {cat.emoji}
            </span>
            <span className="text-xs font-semibold text-gray-700 group-hover:text-saffron-700 text-center leading-tight">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
