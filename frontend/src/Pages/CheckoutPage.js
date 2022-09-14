import React from "react";
import "./CheckoutPage.css";

export default function CheckoutPage() {
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
