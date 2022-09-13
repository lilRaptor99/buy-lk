import React from "react";
import "./KidSection.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
          <div className="search">
            <input type="text" className="searchbar" placeholder="Search" />
            <button className="searchbtn">Search</button>
          </div>
        </div>
        <div className="itemListContainer">
          <div className="table">
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
            <div className="rowContainer">
              <div className="image"></div>
              <div className="name">Toy car</div>
              <div className="price">$30.00</div>
              <div className="quantity">2 items</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
