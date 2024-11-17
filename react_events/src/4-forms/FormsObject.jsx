import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";

function FormsObject() {
  //   const [username, setUsername] = useState("Burak");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const handleUserName = (e) => {
  //     console.log(e.target.value);
  //     setUsername(e.target.value);
  //   };
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = form;
  const handleData = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    alert(`username:${username}, email:${email}, password:${password}`);
    setForm({ username: "", email: "", password: "" });
  };
  //
  return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <h1>FORMS Object</h1>
        <Form.Group className="mb-3">
          <Form.Label>
            Hello : <span className="fw-bold">{username}</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={handleData}
            value={username || ""}
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
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="email"
            value={email || ""}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            id="password"
            value={password || ""}
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormsObject;
