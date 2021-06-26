import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import ProductDetails from '../ProductDetails/ProductDetails';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        setProducts(fakeData)
    },[])

    return (
        <div className="container">
            <div className="row">
                {
                    products.map(product => 
                        <div className="col-md-3 p-5">
                            <ProductDetails product={product}></ProductDetails>
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Products;