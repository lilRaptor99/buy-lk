import React from "react";
import "./KidSection.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import ProductTable from "../components/product/ProductTable";

export default function KidSection() {
  const items = [
    { id: 33, name: "Toy Car", image: null, price: 100, availableQuantity: 2 },
    { id: 34, name: "Toy Car2", image: null, price: 400, availableQuantity: 1 },
    { id: 35, name: "Toy Car3", image: null, price: 200, availableQuantity: 5 },
    { id: 36, name: "Toy Car4", image: null, price: 500, availableQuantity: 6 },
    { id: 37, name: "Toy Car5", image: null, price: 600, availableQuantity: 3 },
    {
      id: 38,
      name: "Toy Car6",
      image: null,
      price: 1000,
      availableQuantity: 10,
    },
  ];
  return (
    <div className="main-container">
      <Header />
      <TitleAndSearch title="Kids Section" />
      <div className="body">
        <ProductTable items={items} />
      </div>
    </div>
  );
}
