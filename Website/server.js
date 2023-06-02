const express = require('express');
const { Pool } = require('pg');
const Product = require('./Moddels/ProductModel');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: 'user',
  host: 'example.com',
  database: 'mydatabase',
  password: 'password',
  port: 5432, // De standaard poort voor PostgreSQL is 5432
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Node API Dit is Thibe');
});

app.get('/blog', (req, res) => {
  res.send('Bloggg Van Thibe werkt');
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    const query = 'SELECT * FROM products';
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

