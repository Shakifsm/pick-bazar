import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between"> 
            <ul>
                <li>
                    <a href="/#">Fruits & Vegetables </a>
                </li>
                <li>
                <a href="/#">Meat & Fish </a>
                </li>
                <li>
                <a href="/#">Snacks </a>
                </li>
                <li>
                <a href="/#">Pet Care </a>
                </li>
                <li>
                <a href="/#">Home & Cleaning </a>
                </li>
                <li>
                <a href="/#">Dairy </a>
                </li>
                <li>
                <a href="/#">Cooking </a>
                </li>
                <li>
                <a href="/#">Breakfast </a>
                </li>
                <li>
                <a href="/#">Beverage</a>
                </li>
                <li>
                <a href="/#">Beauty & Health </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;