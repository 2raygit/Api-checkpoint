const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();  // To load environment variables from .env file

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => console.log(err));

// Routes setup
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
