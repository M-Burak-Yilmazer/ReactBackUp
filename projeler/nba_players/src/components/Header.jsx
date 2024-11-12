import React, { useState } from "react";
import img from "../assets/nba-logo.png";
import Form from "react-bootstrap/Form";

const Header = ({ handleInputChange }) => {

  return (
    <div className="mb-3">
      <img src={img} alt="" />
      <h1>NBA Legends</h1>
      <Form.Control
        type="search"
        placeholder="Search your player"
        className="w-50 m-auto"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Header;
