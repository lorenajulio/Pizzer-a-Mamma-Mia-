import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />

      {/*<Home />*/}
      {/*<Register />*/}
      <Cart />
      <Login />

      <Footer />
    </>
  );
}

export default App;
