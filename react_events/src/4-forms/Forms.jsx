import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("Burak");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
    alert(`username:${username}`)
  }

  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <h1>FORMS</h1>
        <Form.Group className="mb-3">
          <Form.Label>
            Hello : <span className="fw-bold">{username}</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleUserName}
            value={username}
            id="username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Email address: <span className="fw-bold">{email}</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Forms;
