import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayerCard = ({ data }) => {
  const [showImage, setShowImage] = useState(true);
 
  const handleShowImage = () => {
    setShowImage(!showImage);
  };
  return (
    <Card className="player-card" role="button" onClick={handleShowImage}>
      {showImage ? (
        <Card.Img variant="top" src={data.img} className="player-logo" />
      ) : (
        <ul className="m-auto">
          {data.statistics.map((item, i) => (
            <li className="list-unstyled h5 text-start" key={i}>
              {" "}
              🏀{item}
            </li>
          ))}
        </ul>
      )}

      <Card.Footer>
        <Card.Title>{data.name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;
