import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDeleteOutline } from "react-icons/ti";

const AppointmentList = ({ appointments, handleToggle, deleteAppointment }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      <div className="d-flex p-3 flex-column justify-content-center align-items-center">
        {appointments.map(({ patient, day, consulted, doctor, id }) => (
          <div
            // className={consulted ? "appointments consulted" : "appointments"}
            className={`appointments ${consulted ? " consulted" : ""}`}
            onDoubleClick={() => handleToggle(id)}
            key={id}
            role="button"
          >
            <Row className="justify-content-between  align-items-center">
              <Col>
                <h4 className="">{patient}</h4>
                <h5>{doctor}</h5>
              </Col>
              <Col className="text-center">
                <h5>Date: {new Date(day).toLocaleDateString("tr")}</h5>
                <h6>Time: {new Date(day).toLocaleTimeString("tr")}</h6>
              </Col>
              <Col className="text-end fs-1 text-danger">
                <TiDeleteOutline
                  type="button"
                  onClick={() => deleteAppointment(id)}
                />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AppointmentList;
