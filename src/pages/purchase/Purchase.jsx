// src/components/Purchase.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './purchase.css';

const Purchase = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state.book; // Assuming book details are passed through state

  const handleBackToStore = () => {
    navigate('/store');
  };

  return (
    <Container className="purchase-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Purchase Confirmation</h2>
          <div className="book-details">
            <h3>{book.name}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
          </div>
          <Button variant="primary" onClick={handleBackToStore}>Back to Store</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Purchase;
