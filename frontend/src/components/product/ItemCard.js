import React from "react";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import "./ItemCard.css";

export default function ItemCard({ item }) {
  const ShoppingCart = useShoppingCart();
  return (
    <div className="rowContainer">
      <div className="image-container">
        <img className="image" src={item.imageUrl} alt={item.name} />
      </div>
      <div className="name">{item.name}</div>
      <div className="price">LKR {item.price.toFixed(2)}</div>
      <div className="quantity">{item.quantity} items</div>
      <button
        className="btn-primary btn-add-to-cart"
        onClick={() => {
          ShoppingCart.addToCart({ ...item, quantity: 1 });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
