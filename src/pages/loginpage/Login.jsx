import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../controllers/UserContext';
const Login= () => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const {setUser} = useUser();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      // Fetch existing users to validate login
      const response = await axios.get('http://localhost:3002/users');
      const existingUsers = response.data;
      const user = existingUsers.find(user => user.email === email && user.password === password);

      if (user) {
        alert('Login successful');
        setUser(name);
        navigate('/');

      } else {
        alert('Invalid email or password');
      }

    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };
  
  return (
    <div className="signup-background">
      <Container className="signup-container mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}  >
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

              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
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
