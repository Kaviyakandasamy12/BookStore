import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './bookcard.css';

const BookCard = ({ image, price, name, author, description }) => {
  return (
    <Card className="book-card">
      <Row noGutters>
        <Col md={4}>
          <div className="book-image-container">
            <Card.Img src={image} alt={name} className="book-image" />
          </div>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <strong>Author:</strong> {author}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> ₹{price}
            </Card.Text>
            <Card.Text>
              <strong>Description:</strong> {description}
            </Card.Text>
            <br/>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
