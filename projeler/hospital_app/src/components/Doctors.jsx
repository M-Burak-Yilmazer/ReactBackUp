import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ doctorData,setData, data }) => {
  const [show, setShow] = useState(false);
  const [drName, setDrName] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map(({ id, dep, name, img }) => (
          <Col xs={6} md={4} lg={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail doctor-img"
              onClick={() => handleShow(name)}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal setData={setData} data={data} drName={drName} handleClose={handleClose} show={show} />
    </Container>
  );
};

export default Doctors;
