import React from "react";
import "./ProductDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ product }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={product.image} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{product.name}</h5>
        <p class="card-text">
          {product.size}
        </p>
      </div>
        <div class="card-body">
          <span style={{color:"#009E7F", fontWeight:"700"}}>${product.cost}</span>
          <button className="card-btn"> <FontAwesomeIcon icon={faCartArrowDown}/> Cart</button>
        </div>
    </div>
  );
};

export default ProductDetails;
