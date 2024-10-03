import Database from 'better-sqlite3';
const db = new Database('mao-grafica.db');

export default db;
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    image TEXT
  );

  INSERT INTO products (name, description, price, image) VALUES
  ('Producto 1', 'Descripción del producto 1', 100, '/producto1.jpg'),
  ('Producto 2', 'Descripción del producto 2', 150, '/producto2.jpg');
`);
