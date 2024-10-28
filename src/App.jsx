import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CartProvider from "./Context/CartProvider";

// Lazy load your components
const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Signup = lazy(() => import("./Pages/Signup/Signup"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Product = lazy(() => import("./Pages/Product/Product"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));

// Create a loading component
const LoadingIndicator = () => (
  <div className=" text-black font-poppins flex flex-col items-center justify-center h-[100vh] text-xl font-semibold">Loading...</div>
);

const App = () => {
  return (
    <CartProvider>
      <Suspense fallback={<LoadingIndicator />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                color: "black",
                fontFamily: "poppins",
                duration: 10000,
              },
            }}
          />
        </Router>
      </Suspense>
    </CartProvider>
  );
};

export default App;
