import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="container">
        <nav className="logo">
          MiLogo
        </nav>
        <nav>
          <button className="botones">Home</button>
          <button className="botones">Products</button>
          <button className="botones">Contacts</button>
          
        </nav>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
