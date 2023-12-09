import mongoose from 'mongoose';

interface IProduct extends mongoose.Document {
  name: string;
  price: number;
  description: string;
  sizes: string[];
  colors: string[];
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  sizes: [String],
  colors: [String]
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
