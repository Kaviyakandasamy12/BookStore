import React from 'react';
import { Container } from 'react-bootstrap';
import './aboutus.css'; // Import custom CSS for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <Container>
        <section className="about-section mb-5">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="lead text-center">
            Welcome to <strong>Book Haven</strong> - Your Literary Escape
          </p>
          <div className="text-center">
            <p>
              At Book Store, we believe in the transformative power of books. Founded in 2003 by passionate book lovers, our journey began with a simple mission: to connect readers with their next great read. Over the years, we've grown into a beloved community hub for book enthusiasts of all ages.
            </p>
          </div>
        </section>

        <section className="mission-section mb-5">
          <h3 className="text-center mb-4">Our Mission</h3>
          <p className="lead text-center">
            Our mission is to inspire and enrich lives through the joy of reading. We strive to offer a diverse selection of books that cater to every interest and age group.
          </p>
          <ul className="list-unstyled">
            <li>Curated Selection: Each book in our store is handpicked by our team of bibliophiles.</li>
            <li>Community Focus: Book Haven is more than just a bookstore; it's a gathering place for book clubs, author readings, and community events.</li>
            <li>Exceptional Service: Our knowledgeable staff is dedicated to providing personalized recommendations and excellent customer service.</li>
          </ul>
        </section>

        <section className="what-sets-us-apart-section mb-5">
          <h3 className="text-center mb-4">What Sets Us Apart</h3>
          <ul className="list-unstyled">
            <li><strong>Curated Selection:</strong> Each book in our store is handpicked by our team of bibliophiles.</li>
            <li><strong>Community Focus:</strong> Book Haven is more than just a bookstore; it's a gathering place for book clubs, author readings, and community events.</li>
            <li><strong>Exceptional Service:</strong> Our knowledgeable staff is dedicated to providing personalized recommendations and excellent customer service.</li>
          </ul>
        </section>

        <section className="visit-us-section mb-5">
          <h3 className="text-center mb-4">Visit Us</h3>
          <p className="lead text-center">
            Explore our bookstore located in the heart of Tirupur, where you can browse our shelves, attend book signings, and immerse yourself in a world of stories.
          </p>
          <div className="text-center">
            <p>Join us in celebrating the joy of reading and discover why Book Store is more than just a bookstore – it's a haven for book lovers.</p>
          </div>
        </section>

        <section className="contact-us-section mb-5">
          <h3 className="text-center mb-4">Contact Us</h3>
          <div className="text-center">
            <p>Have questions or feedback? We'd love to hear from you! Reach out to us at bookstore@gmail.com  for more information.</p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutUsPage;
