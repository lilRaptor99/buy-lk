import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div className="cart-button-wrapper">
        <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
          <ShoppingCartIcon scale={100} style={{ marginRight: "20px" }} />
          <div>Cart</div>
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
            <div className="cart-list-item-name">
              <span className="cart-list-item-name-qty">3 x </span> Kids T-Shirt
            </div>
            <div className="cart-list-item-price">$30.00</div>
          </div>
          <button className="cart-list-item-remove">
            <CloseIcon style={{ fontSize: "15px" }} />
          </button>
        </div>
        <div className="cart-list-item">
          <div className="cart-list-item-image"></div>
          <div className="cart-list-item-data">
            <div className="cart-list-item-name">
              <span className="cart-list-item-name-qty">1 x </span> Kids Toy
            </div>
            <div className="cart-list-item-price">$30.00</div>
          </div>
          <button className="cart-list-item-remove">
            <CloseIcon style={{ fontSize: "15px" }} />
          </button>
        </div>

        <div className="cart-list-checkout-btn-wrapper">
          <button className="cart-list-checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
