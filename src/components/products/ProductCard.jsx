import { Plus, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div
      className={`group bg-white rounded-2xl p-3 flex flex-col items-center gap-2.5 transition-all duration-200 cursor-pointer border ${
        inCart
          ? "border-forest-400 shadow-md"
          : "border-gray-100 hover:border-saffron-200 hover:shadow-card"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <p className="text-xs font-semibold text-gray-800 text-center leading-snug line-clamp-2 w-full">
        {product.name}
      </p>

      {!inCart ? (
        <button
          onClick={() => addItem(product)}
          className="w-full flex items-center justify-center gap-1 bg-saffron-500 hover:bg-saffron-600 active:scale-95 text-white text-[11px] font-bold py-1.5 rounded-xl transition-all duration-150"
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      ) : (
        <button
          onClick={() => removeItem(product.id)}
          className="w-full flex items-center justify-center gap-1 bg-forest-600 hover:bg-red-500 active:scale-95 text-white text-[11px] font-bold py-1.5 rounded-xl transition-all duration-200 group/btn"
        >
          <Check className="w-3 h-3 group-hover/btn:hidden" />
          <span className="group-hover/btn:hidden">Added</span>
          <span className="hidden group-hover/btn:inline text-[10px]">
            Remove
          </span>
        </button>
      )}
    </div>
  );
}
