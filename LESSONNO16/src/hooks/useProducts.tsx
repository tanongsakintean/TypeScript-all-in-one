import { useContext } from "react";
import ProductsContext, {
  UseProductsContextType,
} from "../context/ProductsProvider";

const useProducts = (): UseProductsContextType => {
  // create custom hook for use function and state global
  return useContext(ProductsContext);
};

export default useProducts;
