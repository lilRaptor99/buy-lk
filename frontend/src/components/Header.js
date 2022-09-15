import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">Logo here</div>
      <div className="links">
        <div className="unselected" id="home">
          <Link to="/" className="nav-link active">
            Home
          </Link>
        </div>
        <div className="unselected" id="kids">
          <Link to="/kids" className="nav-link active">
            Kids
          </Link>
        </div>
        <div className="unselected" id="gents">
          Gents
        </div>
        <div className="unselected" id="women">
          Women
        </div>
        <div className="unselected" id="women">
          <Link to="/advertise" className="btn btn-outline-dark">
            Advertise your Product
          </Link>
        </div>
      </div>
      <div>
        <ShoppingCart cartItems={null} />
      </div>
      <div className="logout">
        <button className="btn-primary">
          <Link to="/" className="nav-link active">
            Log out
          </Link>
        </button>
      </div>
    </div>
  );
}
