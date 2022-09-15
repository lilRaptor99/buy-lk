import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export default function ShoppingCart({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const ShoppingCart = useShoppingCart();

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
        {ShoppingCart.cartItems.map((item) => (
          <div className="cart-list-item" key={item.id}>
            <div className="cart-list-item-image"></div>
            <div className="cart-list-item-data">
              <div className="cart-list-item-name">
                <span className="cart-list-item-name-qty">
                  {item.quantity} x{" "}
                </span>{" "}
                {item.name}
              </div>
              <div className="cart-list-item-price">
                LKR {item.price.toFixed(2)}
              </div>
            </div>
            <button
              className="cart-list-item-remove"
              onClick={() => {
                ShoppingCart.removeFromCart(item.id);
              }}
            >
              <CloseIcon style={{ fontSize: "15px" }} />
            </button>
          </div>
        ))}

        <div className="cart-list-checkout-btn-wrapper">
          {ShoppingCart.cartItems.length > 0 ? (
            <button
              className="cart-list-checkout-btn"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          ) : (
            <div className="cart-list-checkout-btn">Cart is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}
