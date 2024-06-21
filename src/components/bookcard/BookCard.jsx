import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './bookcard.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../controllers/UserContext';

const BookCard = ({ image, price, name, author, description }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleBuy = () => {
    if (user) {
      const book = { image, price, name, author, description };
      navigate('/purchase', { state: { book } });
    } else {
      alert('Please log in to buy the book.');
    }
  };

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
            <Button variant="primary" onClick={handleBuy}>Buy</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;
