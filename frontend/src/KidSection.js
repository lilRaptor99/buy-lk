import React from "react";
import "./KidSection.css";

export default function KidSection() {
  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">Logo here</div>
        <div className="links">
          <div className="unselected" id="home">
            Home
          </div>
          <div className="unselected" id="kids">
            Kids
          </div>
          <div className="unselected" id="gents">
            Gents
          </div>
          <div className="unselected" id="women">
            Women
          </div>
        </div>
        <div className="logout">
          <button className="logoutbtn">
            <div className="logoutBtnTxt">Log out</div>
          </button>
        </div>
      </div>
      <div className="body">
        <div className="titleAndSearch">
          <div className="title">Kids Section</div>
          <div className="search"></div>
        </div>
      </div>
    </div>
  );
}
