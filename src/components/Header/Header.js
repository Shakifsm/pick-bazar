import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header-text">
              <h2>Groceries Delivered in 90 Minute</h2>
              <p>
                Get your healthy foods & snacks delivered at your doorsteps all
                day everyday
              </p>
            </div>
            <div className="header-input">
              <span className="search-text">Grocery</span>
              <input
                className="search-input"
                type="text"
                placeholder="Search your products from here"
              />
              <button className="search-btn">
                {" "}
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon={faSearch}
                />{" "}
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
