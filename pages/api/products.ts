import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, description, price, image } = req.body;

    try {
      const query = 'INSERT INTO products (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [name, description, price, image];
      const result = await db.query(query, values);

      res.status(201).json(result.rows[0]);  // Devolver el producto creado
    } catch (error) {
      console.error('Error al insertar producto:', error);
      res.status(500).json({ message: 'Error al insertar producto' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
