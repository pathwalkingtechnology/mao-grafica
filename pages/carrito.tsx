import Layout from '../components/Layout';
import { useCart } from '../context/CartContext';
import Image from 'next/image';

export default function Carrito() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="border p-4 mb-4 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p>{product.price} ARS</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <h2 className="text-xl font-bold">Total: {totalPrice} ARS</h2>
            {/* Dejar espacio para el botón de pago */}
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
