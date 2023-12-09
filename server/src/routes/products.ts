import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// GET all products
router.get('/', async (_, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    const message = (error as Error).message
    res.status(500).json({ message: message });
  }
});

// GET a single product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    const message = (error as Error).message
    res.status(500).json({ message: message });
  }
});

// POST a new product
router.post('/', async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    const message = (error as Error).message
    res.status(500).json({ message: message });
  }
});

// UPDATE a product
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    const message = (error as Error).message
    res.status(500).json({ message: message });
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    const message = (error as Error).message
    res.status(500).json({ message: message });
  }
});

export default router;
