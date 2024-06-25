// routes/Reviewroutes.js
const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Fetch all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json({ reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a review
router.post('/reviews', async (req, res) => {
  const { review } = req.body;
  try {
    const newReview = new Review({ review });
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
