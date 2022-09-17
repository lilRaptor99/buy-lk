import React from "react";
import "./KidSection.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import ProductTable from "../components/product/ProductTable";
import request from "../utils/request";

export default function WomenSection() {
  const [items, setItems] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await request("get", "/product/women", null);
        setItems(res.data);
        setAllItems(res.data);
      } catch (error) {
        console.log("Failed to fetch products");
      }
    })();
  }, []);
  return (
    <div className="main-container">
      <Header />
      <TitleAndSearch
        title="Women Section"
        allItems={allItems}
        setItems={setItems}
      />
      <div className="body">
        <ProductTable items={items} />
      </div>
    </div>
  );
}
