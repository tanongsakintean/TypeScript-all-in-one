import { ReactElement, createContext, useState, useEffect } from "react";

export type ProductType = {
  // create type of product
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = []; // state global of product

// const initState: ProductType[] = [
//   {
//     sku: "item0001",
//     name: "Widget",
//     price: 9.99,
//   },
//   {
//     sku: "item0002",
//     name: "Premium Widget",
//     price: 19.99,
//   },
//   {
//     sku: "item0003",
//     name: "Deluxe Widget",
//     price: 29.99,
//   },
// ];

export type UseProductsContextType = { product: ProductType[] }; // create type Context of many products

const initContextState: UseProductsContextType = { product: [] }; // create state context of many products

const ProductsContext = createContext<UseProductsContextType>(initContextState); // createContext for add global state

type ChildrenType = {
  // create type children for add ReactElement
  children?: ReactElement | ReactElement[];
};

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  //create Provider for wrap state global in react
  const [product, setProduct] = useState<ProductType[]>(initState); // create state products

  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      /// create function for fetch data from api
      const data = await fetch("http://localhost:3500/products")
        .then((res) => {
          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };

    fetchProducts().then((products) => setProduct(products)); // call function and call then and setProducts to state
  }, []);

  return (
    <ProductsContext.Provider value={{ product }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
