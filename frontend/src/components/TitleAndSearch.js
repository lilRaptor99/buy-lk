import React from "react";
import "./TitleAndSearch.css";

export default function TitleAndSearch({ title }) {
  return (
    <div className="titleAndSearch">
      <div className="title">{title}</div>
      <div className="search">
        <input type="text" className="searchbar" placeholder="Search" />
        <button className="searchbtn">Search</button>
      </div>
    </div>
  );
}
