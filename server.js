const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: 'userpostgres',
  host: 'localhost',
  database: 'influence',
  password: 'passpostgress',
  port: 5432,
});

app.use(express.json());
app.use(cors());

// transbank payment
app.post('/api/payments/transbank', (req, res) => {
  // handle Transbank 
  console.log('Transbank payment request:', req.body);
  res.send({ message: 'Transbank payment processed' });
});

// mercado Pago payment
app.post('/api/payments/mercadopago', (req, res) => {
  // handle Mercado Pago 
  console.log('Mercado Pago payment request:', req.body);
  res.send({ message: 'Mercado Pago payment processed' });
});

// registro de usuarios
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
