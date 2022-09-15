import React from "react";
import "./TitleAndSearch.css";

export default function TitleAndSearch({ title, search = "TYPE" }) {
  return (
    <div className="titleAndSearch">
      <div className="title">{title}</div>
      {Boolean(search) ? (
        <div className="search">
          <input type="text" className="searchbar" placeholder="Search" />
          <button className="searchbtn">Search</button>
        </div>
      ) : (
        <div className="search"></div>
      )}
    </div>
  );
}
