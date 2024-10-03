import db from '../../db';

export default function handler(req, res) {
  const products = db.prepare('SELECT * FROM products').all();
  res.status(200).json(products);
}
