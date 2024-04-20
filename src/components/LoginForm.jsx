import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginContext } from "../context/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [user, setUser] = useState({ email: "", password: "" });

  const { signed, setSigned } = useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      setSigned(true);
      navigate("/");
    } else {
      setSigned(false);
    }

  };
  console.log(signed);
  console.log(user);

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
