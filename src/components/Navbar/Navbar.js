import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="menu">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"><span style={{color:"#0D1136", fontWeight:"700", fontSize:"25px"}}>Pick</span><span style={{color:"#019376", fontWeight:"700", fontSize:"25px"}}>Bazar</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

  <div>
      <select className="select">
          <option value="grocery">Grocery</option>
          <option value="grocery tow">Grocery Tow</option>
          <option value="bakery">Bakery</option>
          <option value="makeup">Makeuo</option>
          <option value="bags">Bags</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
          <option value="furniture 2">Furniture 2</option>
          <option value="book">Book</option>
          <option value=",edicine">Medicine</option>
      </select>
  </div>

    <form style={{marginLeft:"10px"}}>
        <input style={{width:"250px", backgroundColor:"#F7F7F7", border:"none"}} type="text" placeholder="Search your products from here" />
    </form>

    <ul>
        <li>
            <a href="/#">Offer</a>
        </li>
        <li>
            <a href="/#">Need Help</a>
        </li>
    </ul>

    <button className="nav-btn-1">English</button>
    <button className="nav-btn-2">Join</button>
    
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}


  </div>
</nav>
    </div>
  );
};

export default Navbar;
