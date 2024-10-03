import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Asegúrate de usar Link de Next.js para la navegación interna
import { useCart } from '../context/CartContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { cart, totalPrice } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <Link href="/">
          
            <h1>Mao Gráfica</h1>
          
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/carrito">
                
                  Carrito ({cart.length}) - ${totalPrice}
               
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Mao Gráfica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
