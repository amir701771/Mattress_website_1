const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route to serve home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST endpoint for contact form submissions (frontend-backend integration)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }
  
  // Log message to the console for demonstration
  console.log(`[Contact Submit Received]`);
  console.log(`- Name: ${name}`);
  console.log(`- Email: ${email}`);
  console.log(`- Message: ${message}`);

  res.status(200).json({
    success: true,
    message: `Thank you, ${name}! Your message has been received by our server.`
  });
});

// Start Express server
const server = app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`  MATTRESS CUSTOMIZER SERVER RUNNING`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`==================================================`);
});

// Export for potential testing
module.exports = server;
