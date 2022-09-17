import logo from "./logo.svg";
import React from "react";
import "./App.css";
import KidSection from "./Pages/KidSection";
import Login from "./Pages/Login";
import Landingpage from "./Pages/LandingPage";
import Advertise from "./Pages/Advertise";
import Signup from "./Pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./Pages/CheckoutPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import GentSection from "./Pages/GentSection";
import WomenSection from "./Pages/WomenSection";

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/advertise" element={<Advertise />} />
            <Route path="/kids" element={<KidSection />} />
            <Route path="/gents" element={<GentSection />} />
            <Route path="/women" element={<WomenSection />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default App;
