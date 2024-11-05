import React from "react";
import img from "../assets/nba-logo.png";
import Container from "react-bootstrap/esm/Container";


const Header = () => {
  return (
    <Container>
      <img src={img} alt="" />
      <h1 className>NBA Legends</h1>
      <input type="search" placeholder="Search Player..." />
    </Container>
  );
};

export default Header;
