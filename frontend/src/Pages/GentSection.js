import React from "react";
import "./KidSection.css";
import Header from "../components/Header";
import TitleAndSearch from "../components/TitleAndSearch";
import ProductTable from "../components/product/ProductTable";
import request from "../utils/request";

export default function GentSection() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await request("get", "/product/gents", null);
        setItems(res.data);
      } catch (error) {
        console.log("Failed to fetch products");
      }
    })();
  }, []);

  return (
    <div className="main-container">
      <Header />
      <TitleAndSearch title="Gents Section" setItems={setItems} />
      <div className="body">
        <ProductTable items={items} />
      </div>
    </div>
  );
}
