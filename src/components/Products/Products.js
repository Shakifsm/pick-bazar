import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/fakeData";
import ProductDetails from "../ProductDetails/ProductDetails";
import Sidebar from "../Sidebar/Sidebar";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fakeData);
  }, []);

  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3 p-5">
                <ProductDetails product={product}></ProductDetails>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
