import { useEffect, useState } from 'react';
import Layout from '../components/Layout';

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
