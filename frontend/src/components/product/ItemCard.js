import React from "react";
import "./ItemCard.css";

export default function ItemCard({ item }) {
  return (
    <div className="rowContainer">
      <div className="image"></div>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="quantity">{item.qty} items</div>
    </div>
  );
}
