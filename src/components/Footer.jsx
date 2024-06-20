import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      &copy; {new Date().getFullYear()} BookStore. All Rights Reserved.
    </footer>
  );
};

export default Footer;
