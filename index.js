// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection URI
const mongoURI = 'YOUR MONGODB_URL';

// Connect to MongoDB with enhanced error handling
mongoose.connect(mongoURI, {
  
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error: ', err));


// Define the Data model
const Data = mongoose.model('Data', new mongoose.Schema({
  username: String,
  userdata: String,
}));

// Route to fetch data
app.get('/api/data', async (req, res) => {
  try {
    const data = await Data.find(); // Fetch all documents from the 'Data' collection
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
