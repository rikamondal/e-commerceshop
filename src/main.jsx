import React from "react";
import ThemeProvider from "./theme/ThemeContext";
import ShopProvider from "./context/ShopContext";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <AuthProvider>
  <ThemeProvider>
    <ShopProvider>
      <App />
      <ToastContainer position="top-right" />
    </ShopProvider>
  </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>
);