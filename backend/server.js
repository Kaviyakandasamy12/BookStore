const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/Userroutes');
const reviewRoutes = require('./routes/Reviewroutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api', reviewRoutes);

mongoose.connect('mongodb+srv://kaviyakandasamy26:ZYcxMy0WIUQN3i4L@user.mxybggn.mongodb.net/?retryWrites=true&w=majority&appName=user', {
  
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
