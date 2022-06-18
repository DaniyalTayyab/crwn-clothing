import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import { PorductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PorductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PorductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
