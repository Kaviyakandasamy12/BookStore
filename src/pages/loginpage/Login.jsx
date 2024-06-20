import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './login.css';
const Login= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <div className="signup-background">
      <Container className="signup-container mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Login</h2>
            <Form noValidate  >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 characters.
                </Form.Control.Feedback>
              </Form.Group>

              

              <Row className="justify-content-md-center">
                <Col md={6} className="text-center">
                  <Button variant="primary" type="submit" className="mt-4">
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
