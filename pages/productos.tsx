import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Layout from '../components/Layout';
import db from '../db';

export default function Productos({ products }: { products: any[] }) {
  const { addToCart } = useCart();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={350}
              height={200}
              className="object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="mt-1 text-gray-700">{product.description}</p>
            <p className="mt-1 font-bold">{product.price} ARS</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => addToCart(product)}
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// Esta función se ejecuta solo en el servidor para obtener los productos
export async function getServerSideProps() {
  const products = db.prepare('SELECT * FROM products').all();

  return {
    props: {
      products,
    },
  };
}
