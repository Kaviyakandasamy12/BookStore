import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';// Ensure this path is correct
import './App.css'; 
import Login from './pages/loginpage/Login';
import Signup from './pages/signuppage/Signup';
import Store from './pages/storepage/Store';
import AboutUsPage from './pages/aboutus/AboutUsPage';
import Purchase from './pages/purchase/Purchase';
import ReviewPage from './pages/reviewpage/ReviewPage';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Signup/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/aboutus" element={<AboutUsPage/>} />
            <Route path='/purchase' element={<Purchase/>}/>
            <Route path="/reviews" element={<ReviewPage />} />
          </Routes>
        </main>
        <br/><br/><br/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
