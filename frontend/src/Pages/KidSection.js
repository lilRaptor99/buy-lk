import React from "react";
import "./KidSection.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import ProductTable from "../components/product/ProductTable";

export default function KidSection() {
  const items = [
    { name: "Toy Car", image: null, price: "$10.00", qty: 2 },
    { name: "Toy Car1", image: null, price: "$30.00", qty: 2 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 5 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 2 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 2 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 2 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 2 },
    { name: "Toy Car", image: null, price: "$30.00", qty: 2 },
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
