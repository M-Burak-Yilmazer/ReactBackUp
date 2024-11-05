import React from "react";
import Header from "./Header";
import PlayerCard from "./PlayerCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-center card-container">
          {data.map((player) => (
            <Col xl={3} lg={4} md={6}>
              <PlayerCard {...player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
