const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Sample Product 1', price: 15.99 },
  { id: 2, name: 'Sample Product 2', price: 29.99 }
];
router.get('/', (req, res) => {
  res.json(products);
});
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'Name and price are required.' });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
