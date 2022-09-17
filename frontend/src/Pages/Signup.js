import React from "react";
import "./Login.css";
import background from "../assets/background.jpg";
import { Link } from "react-router-dom";
import request from "../utils/request";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    role: "BUYER",
  });
  const navigate = useNavigate();

  async function handleSubmit() {
    console.log("formState", formState);
    try {
      const res = await request("post", `/register/${formState.role}`, {
        ...formState,
        role: undefined,
      });
      navigate("/login");
    } catch (error) {
      alert(`Failed to register: ${error.response.data.errors[0]}`);
    }
  }

  return (
    <div className="landingpage-main-container">
      <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            buy.lk
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end pe-8"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" className="nav-link active">
                  Log in
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signup" className="nav-link active">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="Container d-flex justify-content-center align-items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="login-container d-flex flex-column p-5">
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={formState.firstName}
              onChange={(e) => {
                setFormState({ ...formState, firstName: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={formState.lastName}
              onChange={(e) => {
                setFormState({ ...formState, lastName: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Phone number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
              value={formState.phoneNumber}
              onChange={(e) => {
                setFormState({ ...formState, phoneNumber: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={formState.addressLine1}
              onChange={(e) => {
                setFormState({ ...formState, addressLine1: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={formState.email}
              onChange={(e) => {
                setFormState({ ...formState, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={formState.password}
              onChange={(e) => {
                setFormState({ ...formState, password: e.target.value });
              }}
            />
          </div>
          <h5>I want to,</h5>
          <div className="mb4">
            <label className="radio-inline mr3">
              <input
                type="radio"
                name="optradio"
                checked={formState.role === "BUYER"}
                onClick={() => {
                  setFormState({ ...formState, role: "BUYER" });
                }}
                className="mr1"
              />
              Buy clothes
            </label>
            <label className="radio-inline">
              <input
                type="radio"
                name="optradio"
                onClick={() => {
                  setFormState({ ...formState, role: "SELLER" });
                }}
                className="mr1"
                checked={formState.role === "SELLER"}
              />
              Sell clothes
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered{" "}
            <Link to="/login" className="nav-link active">
              Log in?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
