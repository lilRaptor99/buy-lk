import React from 'react'
import background from '../assets/background.jpg';
import './Login.css'
import { Link } from "react-router-dom";

function Login () {
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
                    <h3>Log In</h3>
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
                    <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label className="custom-control-label px-2" htmlFor="customCheck1">
                        Remember me
                        </label>
                    </div>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    </div>
                    <p className="forgot-password text-right">
                    Don't have a account<Link to='/signup' className="nav-link active">Sign up?</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;