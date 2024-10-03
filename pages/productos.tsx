import Layout from '../components/Layout';
import Image from 'next/image'; // Asegúrate de usar Image de next/image para optimizar imágenes
import db from '../db'; // Importa la conexión a PostgreSQL

// Definir un tipo para los productos
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Productos({ products }: { products: Product[] }) {
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
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// Esta función se ejecuta solo en el servidor
export async function getServerSideProps() {
  const query = 'SELECT * FROM products';
  
  try {
    const { rows: products } = await db.query(query);
    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return {
      props: { products: [] },
    };
  }
}
