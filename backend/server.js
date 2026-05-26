// 358 backend server.js
// updated 2026-05-25
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// AirThings routes — future development
// import airthingsRoutes from './routes/airthings.js';
// app.use('/api/airthings', airthingsRoutes);

app.listen(PORT, () => 
  console.log(`358highstreet backend running on port ${PORT}`)
);