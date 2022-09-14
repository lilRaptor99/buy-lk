import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React, { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ cartItems }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      <div className="cart-button-wrapper">
        <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
          <ShoppingCartIcon scale={100} style={{ marginRight: "20px" }} />
          <h4>Cart</h4>
          {!isOpen ? (
            <KeyboardArrowDownIcon
              scale={30}
              style={{ marginLeft: "40px", fontSize: "20px" }}
            />
          ) : (
            <KeyboardArrowUpIcon
              scale={30}
              style={{ marginLeft: "40px", fontSize: "20px" }}
            />
          )}
        </button>
      </div>
      <div
        className="cart-list-wrapper"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="cart-list-item">
          <div className="cart-list-item-image"></div>
          <div className="cart-list-item-data">
            <p className="">
              <span>3 x </span> Kids T-Shirt
            </p>
            <p className="cart-list-item-price">$30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
