import { useContext } from "react";
import CartContext, { UseCartContextType } from "../context/CartProvider";

const useCart = (): UseCartContextType => {
  // create custom hook for use function and state global
  return useContext(CartContext);
};

export default useCart;
