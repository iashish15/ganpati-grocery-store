import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find((i) => i.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.id !== action.payload) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      };
    case "DECREMENT":
      return {
        items: state.items
          .map((i) =>
            i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i,
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const increment = (id) => dispatch({ type: "INCREMENT", payload: id });
  const decrement = (id) => dispatch({ type: "DECREMENT", payload: id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const isInCart = (id) => state.items.some((i) => i.id === id);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
        totalItems,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
