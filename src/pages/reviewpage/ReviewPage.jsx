import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './reviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        setReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reviews', { review: newReview });
      setReviews([...reviews, response.data.review]);
      setNewReview('');
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  return (
    <Container className="mt-5" id='review'>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Reviews</h2>
          <Form onSubmit={handleReviewSubmit} className="mt-4">
            <Form.Group controlId="formReview">
              <Form.Label id='para' >Give your review</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your review"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                required
              />
            </Form.Group>
            <Button  id="button" variant="success" type="submit" className="mt-3">
              Submit Review
            </Button>
          </Form>
          <h3 className="text-center mt-4">Previous Reviews</h3>
            {reviews.map((review, index) => (
              <Card className="mb-3 review-card" key={index}>
                <Card.Body>
                  <Card.Text>{review.review}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewPage;
