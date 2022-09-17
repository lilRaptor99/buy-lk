import React from "react";
import "./KidSection.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import ProductTable from "../components/product/ProductTable";
import request from "../utils/request";

export default function KidSection() {
  const [items, setItems] = React.useState([]);
  const [allItems, setAllItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await request("get", "/product/kids", null);
        let data = res.data;
        data.splice(1, 1);
        console.log("data", data);

        setAllItems(data);
        setItems(data);
      } catch (error) {
        console.log("Failed to fetch products");
      }
    })();
  }, []);
  return (
    <div className="main-container">
      <Header />
      <TitleAndSearch
        title="Kids Section"
        allItems={allItems}
        setItems={setItems}
      />
      <div className="body">
        <ProductTable items={items} />
      </div>
    </div>
  );
}
