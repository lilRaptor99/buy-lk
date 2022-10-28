import React, { useEffect, useState } from "react";
import "./advertise.css";
import { Link } from "react-router-dom";
import request from "../utils/request";
import Axios from "axios";

function Advertise() {
  const [items, setItems] = useState(null);
  const [file, setFile] = useState("");
  const [fetchData, setFetchData] = useState({
    title: "",
    price: "",
    quantity: "",
    type: "",
    image: "",
  });
  useEffect(() => {
    async function getItems() {
      const res = await request("get", "/product", null);
      console.log(res.data);
      setItems(res.data);
    }
    getItems();
  }, []);
  const submitDetails = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dskmbhbt");
    data.append("cloud_name", "surakimagaimagecloud");
    Axios.post(
      "https://api.cloudinary.com/v1_1/surakimagaimagecloud/image/upload",
      data
    ).then((response) => {
      const { dataresponse, error } = request("post", "/product/add", {
        name: fetchData.title,
        price: fetchData.price,
        quantity: fetchData.quantity,
        productType: fetchData.type,
        imageUrl: response.data.secure_url,
      });
      console.log(response.data.secure_url);
      console.log(fetchData);
      setFile(null);
      setFetchData({
        title: "",
        image: "",
        price: "",
        quantity: "",
        type: "",
      });
    });
  };
  const handleselect = (selected) => {
    setFetchData({ ...fetchData, type: selected });
  };
  const removeItem = async (id) => {
    const res = await request("post", "/product/delete/" + id, null);
  };
  return (
    <div className="landingpage-main-container">
      <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
            <ul class="navbar-nav align-items-center">
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/kids" className="nav-link active">
                  Kids
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Women
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gents
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/advertise" className="btn btn-outline-light">
                    Adverties your Product
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="landingpage-body d-flex flex-column p-4">
        <div>
          <ul class="nav nav-tabs gap-4 mb-3 p-4" id="nav-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-links active"
                id="ex1-tab-1"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Your Products
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-links"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Add new
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <div className="products-list d-flex flex-wrap p-4 gap-4 justify-content-start">
              {items != null
                ? items.map((item) => {
                    return (
                      <div class="card product-card" style={{ width: "18rem" }}>
                        <img src={item.imageUrl} class="card-img-top" alt="" />
                        <div class="card-body">
                          <h5 class="card-title">{item.name}</h5>
                          <p class="card-text"></p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">LKR {item.price}</li>
                          <li class="list-group-item">
                            Type : {item.productType}
                          </li>
                          <li class="list-group-item">
                            Quantity : {item.quantity}
                          </li>
                        </ul>
                        <div class="card-body">
                          <a href="#" class="card-link">
                            Edit
                          </a>
                          <button
                            class="card-link"
                            onClick={() => removeItem(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div className="form-card d-flex justify-content-center">
              <div className="card flex-row alignn-items-center p-4 gap-4">
                <div className="form-details d-flex flex-column p-4 gap-4">
                  <h3>Add new Product to Sell</h3>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingInput"
                      placeholder="title"
                      value={fetchData.title}
                      onChange={(e) =>
                        setFetchData({ ...fetchData, title: e.target.value })
                      }
                    />
                    <label for="floatingInput">Title</label>
                  </div>
                  <div class="form-floating mb-3">
                    <select
                      id="inputSchoolvan"
                      class="form-select"
                      placeholder="Choose.."
                      onChange={(e) => handleselect(e.target.value)}
                    >
                      <option value="women">Women</option>
                      <option value="kids">Kids</option>
                      <option value="gents">Gents</option>
                    </select>
                    <label for="floatingInput">Product Type</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingInput"
                      style={{ width: "20%" }}
                      placeholder="price"
                      value={fetchData.price}
                      onChange={(e) =>
                        setFetchData({ ...fetchData, price: e.target.value })
                      }
                    />
                    <label for="floatingInput">Price</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="floatingInput"
                      style={{ width: "60%" }}
                      placeholder="quantity"
                      value={fetchData.quantity}
                      onChange={(e) =>
                        setFetchData({ ...fetchData, quantity: e.target.value })
                      }
                    />
                    <label for="floatingInput">Quantity</label>
                  </div>
                  <div class="form-floating mb-3 d-flex gap-4 justify-content-between">
                    <input
                      type="file"
                      class="form-control"
                      id="floatingInput"
                      style={{ width: "20%" }}
                      onChange={(event) => {
                        setFile(event.target.files[0]);
                      }}
                    />
                    <label for="floatingInput">Image</label>
                    <button
                      className="btn btn-outline-danger"
                      onClick={submitDetails}
                    >
                      save
                    </button>
                  </div>
                </div>
                {/* <div className="form-images d-flex flex-column p-4 gap-4 justify-content-center">
                  <div className="addmainimages d-flex justify-content-center align-items-center">
                    <div class="sub-button">
                      <input type="file" />
                      <i class="bi bi-plus-lg"></i>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
