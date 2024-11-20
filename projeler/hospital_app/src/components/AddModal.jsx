import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const AddModal = ({ drName, handleClose, show, setData, data }) => {
  const [patient, setPatient] = useState({
    name: "",
    date: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: new Date().getTime(),
      patient: patient.name,
      day: patient.date,
      consulted: false,
      doctor: drName,
    };
    console.log(newData);

    setData([...data, newData]);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setPatient({ ...patient, name: e.target.value })
                }
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="date"
                onChange={(e) =>
                  setPatient({ ...patient, date: e.target.value })
                }
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="secondary" type="button" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
