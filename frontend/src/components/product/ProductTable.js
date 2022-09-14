import React from "react";
import ItemCard from "./ItemCard";
import "./ProductTable.css";

export default function ProductTable({ items }) {
  return (
    <div className="itemListContainer">
      <div className="itemsTable">
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
    </div>
  );
}
