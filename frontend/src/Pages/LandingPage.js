import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function Landingpage() {
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
      <div className="landingpage-body">
        <div id="LpageCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#LpageCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#LpageCarousel"
              data-bs-slide-to="1"
              class="slide2"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../assets/clothing_1.jpg")}
                height="900px"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-flex flex-column gap-4 align-items-center">
                <h1>Freshen Up Your Look</h1>
                <Link to="/kids" className="btn-Shop">
                  <p1>Shop Here</p1>
                </Link>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={require("../assets/clothing_2.jpg")}
                height="900px"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-flex flex-column gap-4 align-items-center">
                <h1>
                  Sell Your Products
                  <br /> Hassle-free
                </h1>
                <Link to="/advertise" className="btn-Shop">
                  <p1>Advertise</p1>
                </Link>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#LpageCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#LpageCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
