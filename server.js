const express = require('express');
const axios = require('axios');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  allowExitOnIdle: true,
});

app.use(express.json());
app.use(cors());

// Transbank
app.post('/api/payments/transbank', async (req, res) => {
  try {
    const response = await axios.post(process.env.TRANSBANK_PAYMENT_URL, req.body);
    res.send(response.data);
  } catch (error) {
    console.error('Error processing Transbank payment:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

// Registro de usuarios
app.post('/api/register', async (req, res) => {
  const { name, direction, email, instagram } = req.body;

  if (!name || !direction || !email || !instagram) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO registrados (name, direction, email, instagram) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, direction, email, instagram]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
