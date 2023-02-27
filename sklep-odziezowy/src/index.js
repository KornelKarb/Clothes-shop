import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/user.context.jsx";
import { ProductProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";
import "./index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
