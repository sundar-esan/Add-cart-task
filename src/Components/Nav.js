import React from "react";
import "./cart.css";

const Nav = ({ cartCount }) => {
  return (
    <div className="navContainer">
      <h3>Cart</h3>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <div className="cart">
        <strong>Cart</strong> <span className="cartNo">{cartCount}</span>
      </div>
    </div>
  );
};
export default Nav;
