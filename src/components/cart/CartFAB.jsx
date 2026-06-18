import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartFAB({ onOpen }) {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-forest-600 hover:bg-forest-700 text-white rounded-full shadow-fab flex items-center justify-center transition-all duration-200 active:scale-90 hover:scale-110"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 w-6 h-6 bg-saffron-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
        {totalItems > 99 ? "99+" : totalItems}
      </span>
    </button>
  );
}
