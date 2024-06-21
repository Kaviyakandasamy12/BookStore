import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
  return (
    <div style={{ paddingTop:'100px', width: '70%', margin: '0 auto' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150226036.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.shutterstock.com/image-vector/set-promo-sale-flyers-bookstore-260nw-1785161456.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-social-media-cover-template-world-book-day-celebration_23-2150201450.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="offers mt-4">
        <h2>Special Offers at Our Bookstore!</h2>
        
        <div className="offer-item">
          <h3>Summer Reading Bonanza</h3>
          <p>Dive into our Summer Reading Bonanza with discounts up to 50% on selected bestsellers! Whether you're lounging by the pool or relaxing at home, we've got the perfect book for you.</p>
        </div>
        
        <div className="offer-item">
          <h3>Buy One, Get One Free</h3>
          <p>For a limited time, enjoy our Buy One, Get One Free offer on all fiction and non-fiction titles. Discover new authors and genres without breaking the bank.</p>
        </div>
        
        <div className="offer-item">
          <h3>Student Discount</h3>
          <p>Calling all students! Show your student ID at checkout and get an additional 15% off all textbooks and educational materials. Stock up for the upcoming semester with our amazing deals.</p>
        </div>
        
        <div className="offer-item">
          <h3>Membership Rewards</h3>
          <p>Join our bookstore membership program today and earn points on every purchase. Redeem points for exclusive discounts and special offers throughout the year. Plus, members receive early access to sales and new arrivals.</p>
        </div>
        
        <div className="offer-item">
          <h3>Children's Book Week</h3>
          <p>Celebrate Children's Book Week with 30% off all children's books. From classic tales to modern adventures, inspire your young readers with our extensive collection.</p>
        </div>
        
        <div className="offer-item">
          <h3>Weekend Flash Sale</h3>
          <p>Don't miss our Weekend Flash Sale! Every Friday to Sunday, enjoy surprise discounts on different categories. Check back often to see which books are on sale each weekend.</p>
        </div>
        
        <p>Visit our bookstore today and take advantage of these fantastic offers. Happy reading!</p>
      </div>
    </div>
  );
};

export default Home;
