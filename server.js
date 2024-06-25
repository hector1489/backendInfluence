const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Transbank payment
app.post('/api/payments/transbank', (req, res) => {
  // Handle Transbank 
  console.log('Transbank payment request:', req.body);
  res.send({ message: 'Transbank payment processed' });
});

// Mercado Pago payment
app.post('/api/payments/mercadopago', (req, res) => {
  // Handle Mercado Pago 
  console.log('Mercado Pago payment request:', req.body);
  res.send({ message: 'Mercado Pago payment processed' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
