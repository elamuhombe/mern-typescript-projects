// Import the dotenv package to manage environment variables
import dotenv from 'dotenv';

// Load environment variables from a .env file into process.env
dotenv.config();

// Import the mongoose package to interact with MongoDB
import mongoose from 'mongoose';

// Import the express package to create a web server
import express from 'express';

// Create an Express application
const app = express();

// Define the port on which the server will listen, using the value from environment variables or a default of 5200
const PORT = process.env.PORT || 5200;

// Retrieve the MongoDB connection URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Check if the MongoDB URI is defined, if not, throw an error
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in the environment variables');
}

// Connect to MongoDB using mongoose and log the connection status
mongoose.connect(MONGODB_URI).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start the Express server and listen on the defined port, logging the server status
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
