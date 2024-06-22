// src/components/Purchase.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './purchase.css';

const Purchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state.book;

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleBackToStore = () => {
    navigate('/store');
  };

  const handleConfirmPurchase = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert('Purchase Confirmed!');
      navigate('/store');
    }
    setValidated(true);
  };

  return (
    <Container className="purchase-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Purchase Confirmation</h2>
          <div className="book-details">
            <img src={book.image} alt={book.name} className="book-image" />
            <h3>{book.name}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
          </div>
          <h3>Payment Details</h3>
          <Form noValidate validated={validated} onSubmit={handleConfirmPurchase}>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter card number" 
                required 
                pattern="\d{16}" 
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid card number.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCardName" className="mt-3">
              <Form.Label>Card Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter name on card" 
                required 
              />
              <Form.Control.Feedback type="invalid">
                Please provide the name on the card.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formExpirationDate" className="mt-3">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="MM/YY" 
                required 
                pattern="(0[1-9]|1[0-2])\/?([0-9]{2})" 
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid expiration date (MM/YY).
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCVV" className="mt-3">
              <Form.Label>CVV</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter CVV" 
                required 
                pattern="\d{3}" 
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid CVV.
              </Form.Control.Feedback>
            </Form.Group>
            {showAlert && (
              <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                Please fill out all fields correctly.
              </Alert>
            )}
            <Row className="mt-4">
              <Col>
                <Button variant="primary" type="submit">Confirm Purchase</Button>
              </Col>
              <Col>
                <Button variant="secondary" onClick={handleBackToStore}>Back to Store</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Purchase;
