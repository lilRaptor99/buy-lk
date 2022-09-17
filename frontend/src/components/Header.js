import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <a class="navbar-brand" href="#">
          buy.lk
        </a>
      </div>
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
          <Link to="/gents" className="nav-link active">
            Gents
          </Link>
        </div>
        <div className="unselected" id="women">
          <Link to="/women" className="nav-link active">
            Women
          </Link>
        </div>
        {/* <div className="unselected" id="women">
          <Link to="/advertise" className="btn btn-outline-dark">
            Advertise your Product
          </Link>
        </div> */}
      </div>
      <div>
        <ShoppingCart cartItems={null} />
      </div>
      <div className="logout">
        {currentUser ? (
          <button
            className="btn-primary"
            onClick={() => {
              logout();
            }}
          >
            Log out
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
