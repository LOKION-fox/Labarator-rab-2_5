import { createContext, useContext, useReducer, useMemo } from "react";

export const CartC = createContext();
export const useCart = () => useContext(CartC);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const idx = state.items.findIndex((i) => i.id === action.item.id);
      if (idx >= 0) {
        const items = state.items.slice();
        items[idx] = { ...items[idx], qty: items[idx].qty + 1 };
        return { items };
      }
      return { items: [...state.items, { ...action.item, qty: 1 }] };
    }
    case "REMOVE": {
      return { items: state.items.filter((i) => i.id !== action.id) };
    }
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  const addToCart = (item) => dispatch({ type: "ADD", item });
  const removeFromCart = (id) => dispatch({ type: "REMOVE", id });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const itemsCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty, 0),
    [state.items]
  );
  const total = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  );

  const value = useMemo(
    () => ({ cart: state.items, addToCart, removeFromCart, clearCart, itemsCount, total }),
    [state.items, itemsCount, total]
  );

  return <CartC.Provider value={value}>{children}</CartC.Provider>;
}
