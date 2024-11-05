import React from "react";
import img from "../assets/nba-logo.png";


const Header = () => {
  return (
    <div>
      <img src={img} alt="" />
      <h1>NBA Legends</h1>
      <input type="search" placeholder="Search Player..." />
    </div>
  );
};

export default Header;
