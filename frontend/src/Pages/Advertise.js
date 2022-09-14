import React from 'react';
import './advertise.css'
import { Link } from "react-router-dom";

function Advertise() {
    let products=Array.from(Array(10).keys());
    return (
        <div className="landingpage-main-container">
            <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">buy.lk</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end pe-8" id="navbarNavDropdown">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item">
                        <Link to='/' className="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link to='/kids' className="nav-link active">Kids</Link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Women</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Gents</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                        <Link to='/advertise' className='btn btn-outline-light'>Adverties your Product</Link>
                        </a>
                        </li>
                        <li class="nav-item">
                        <Link to='/' className="nav-link active">Log out</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="landingpage-body d-flex flex-column p-4">
                <div>
                    <ul class="nav nav-tabs gap-4 mb-3 p-4" id="nav-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-links active" id="ex1-tab-1" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Your Products</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-links" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add new</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div className='products-list d-flex flex-wrap p-4 gap-4 justify-content-start'>
                        {products.map((item,index)=>{
                            return <div class="card product-card" style={{width:'18rem'}}>
                            <img src={require('../assets/clothing_2.jpg')} class="card-img-top" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title">Women's Dress</h5>
                                <p class="card-text">Women Summer Long Sleeve Chiffon Bandage Slim Formal Evening Party Dress Clothing Dresses Slim Formal Evening.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">LKR 1620.48</li>
                                <li class="list-group-item">Quantity : 50</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Edit</a>
                                <a href="#" class="card-link">Remove</a>
                            </div>
                        </div>
                        })}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div className='form-card d-flex justify-content-center'>
                            <div className='card flex-row alignn-items-center p-4 gap-4'>
                                <div className='form-details d-flex flex-column p-4 gap-4'>
                                    <h3>Add new Product to Sell</h3>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" placeholder="title"/>
                                        <label for="floatingInput">Title</label>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                                        <label for="floatingTextarea2">Description</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" style={{width: '20%'}} placeholder="price"/>
                                        <label for="floatingInput">Price</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input class="form-control" id="floatingInput" style={{width: '60%'}} placeholder="price"/>
                                        <label for="floatingInput">Quantity</label>
                                    </div>
                                    <div class="form-floating mb-3 d-flex gap-4 justify-content-between">
                                        <input class="form-control" id="floatingInput" style={{width: '60%'}} placeholder="price"/>
                                        <label for="floatingInput">Account number</label>
                                        <button className='btn btn-outline-danger'>save</button>
                                    </div>
                                </div>
                                <div className='form-images d-flex flex-column p-4 gap-4 justify-content-center'>
                                    <div className='addmainimages d-flex justify-content-center align-items-center'>
                                        <div class="sub-button"><i class="bi bi-plus-lg"></i></div>
                                    </div>
                                    <div className='addotherimages d-flex gap-4'>
                                        <div className='addimages d-flex justify-content-center align-items-center'><div class="sub-button"><i class="bi bi-plus-lg"></i></div></div>
                                        <div className='addimages d-flex justify-content-center align-items-center'><div class="sub-button"><i class="bi bi-plus-lg"></i></div></div>
                                        <div className='addimages d-flex justify-content-center align-items-center'><div class="sub-button"><i class="bi bi-plus-lg"></i></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advertise;