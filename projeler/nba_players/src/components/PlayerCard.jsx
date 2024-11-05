import React from "react";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ img, name }) => {
  return (
    <Card className="player-card rounded mt-2">
      <Card.Img className="player-logo" variant="top" src={img}  />
      <Card.Footer>Player Name:{name}</Card.Footer>
    </Card>
  );
};

export default PlayerCard;
