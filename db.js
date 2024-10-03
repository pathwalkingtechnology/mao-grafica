import Database from 'better-sqlite3';
const db = new Database('mao-grafica.db');

// Crear la tabla de productos si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    image TEXT
  );
`);

// Verificar si ya existen productos en la tabla
const existingProducts = db.prepare('SELECT COUNT(*) AS count FROM products').get();

if (existingProducts.count === 0) {
  // Insertar productos solo si no existen
  db.exec(`
    INSERT INTO products (name, description, price, image) VALUES
    ('Producto 1', 'Descripción del producto 1', 100, '/producto1.jpg'),
    ('Producto 2', 'Descripción del producto 2', 150, '/producto2.jpg');
  `);
}

export default db;
