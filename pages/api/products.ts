import { NextApiRequest, NextApiResponse } from 'next'; // Importamos los tipos de Next.js
import db from '../../db';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = db.prepare('SELECT * FROM products').all();
  res.status(200).json(products);
}
