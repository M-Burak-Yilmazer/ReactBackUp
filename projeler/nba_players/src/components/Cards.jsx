import React, { useState } from "react";
import Header from "./Header";
import PlayerCard from "./PlayerCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = ({ data }) => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  let filteredData = data.filter((player) =>
    player.name.toLocaleLowerCase().includes(input.toLocaleLowerCase().trim())
  );

  return (
    <div>
      <Header handleInputChange={handleInputChange} />
      <Container className="card-container rounded-4 my-4 p-3 ">
        <Row className="justify-content-center g-3">
          {filteredData.map((player, i) => (
            <Col xs={12} xl={3} lg={4} md={6} key={i}>
              <PlayerCard data={player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
