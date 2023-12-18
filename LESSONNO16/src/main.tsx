import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CartProvider } from "./context/CartProvider.tsx";
import { ProductsProvider } from "./context/ProductsProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      {/* ProductsProvider wrap state to global  */}
      <CartProvider>
        {/* CartProvider wrap state to global  */}
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
