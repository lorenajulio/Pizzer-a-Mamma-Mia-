import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import Login, { LoginPage } from "./views/LoginPage";
import Cart, { CartPage } from "./views/CartPage";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/*<Register />*/}

      {/*<Login />*/}

      <Footer />
    </>
  );
}

export default App;
