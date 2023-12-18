import { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";

const ProductList = () => {
  const { dispatch, REDUCER_ACTION, cart } = useCart(); // call from custom hook
  const { product } = useProducts();

  let pageContent: ReactElement | ReactElement[] = <p>Loading ...</p>;

  if (product?.length) {
    pageContent = product.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku); // check have product in cart
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTION}
          inCart={inCart}
        />
      );
    });
  }

  const content = <main className="main main--products">{pageContent}</main>;
  return content;
};

export default ProductList;
