import React from "react";
import "./TitleAndSearch.css";

export default function TitleAndSearch({
  title,
  search = "TYPE",
  allItems = null,
  setItems = null,
}) {
  function handleChange(e) {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setItems(allItems);
      return;
    }

    const filteredItems = allItems.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setItems(filteredItems);
  }

  return (
    <div className="titleAndSearch">
      <div className="title">{title}</div>
      {Boolean(search) ? (
        <div className="search">
          <input
            type="text"
            className="searchbar"
            placeholder="Search"
            onChange={handleChange}
          />
          <button className="searchbtn">Search</button>
        </div>
      ) : (
        <div className="search"></div>
      )}
    </div>
  );
}
