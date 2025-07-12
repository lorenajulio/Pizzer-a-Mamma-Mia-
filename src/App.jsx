import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./views/HomePage";
import Footer from "./components/Footer";
import RegisterPage from "./views/RegisterPage";
import Login, { LoginPage } from "./views/LoginPage";
import Cart, { CartPage } from "./views/CartPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import { Pizza } from "./components/Pizza";
import { useUser } from "./context/UserContext";

function App() {
  const { token } = useUser();
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
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
