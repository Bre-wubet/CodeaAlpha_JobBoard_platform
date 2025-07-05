import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();
// Define a simple route
app.get('/', (req, res) => {
  res.send('API is running...');
});
// Import routes
// import userRoutes from './routes/userRoutes.js';

// app.use('/api/users', userRoutes);
// Error handling middleware
app.use((err, req, res, next) => {  
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
}); 

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});