import React from 'react'
import './Login.css'
import background from '../assets/background.jpg';
import { Link } from "react-router-dom";

function Signup () {
    return (
        <div className="landingpage-main-container">
            <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">buy.lk</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end pe-8" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/login' className="nav-link active">Log in</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/signup' className="nav-link active">Sign up</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className='Container d-flex justify-content-center align-items-center' style={{ backgroundImage:`url(${background})` }}>
                <div className="login-container d-flex flex-column p-5">
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                    </div>
                    <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                    </div>
                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Already registered <Link to='/login' className="nav-link active">Log in?</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;