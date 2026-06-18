import { Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      {/* Emoji */}
      <div className="w-12 h-12 bg-gradient-to-br from-saffron-50 to-amber-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border border-saffron-100">
        {item.emoji}
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
          {item.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">Tap to remove</p>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.id)}
        className="p-2 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
