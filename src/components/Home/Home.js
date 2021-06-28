import React from 'react';
import Cart from '../Cart/Cart';
import Demos from '../Demos/Demos';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Vouchers from '../Vouchers/Vouchers';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Vouchers></Vouchers>
            <Products></Products>
            <Cart></Cart>
            <Demos></Demos>
        </>
    );
};

export default Home;