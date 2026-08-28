const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

//Middlewares
app.use(cors());
app.use(express.json())

// 1. Inicializar Base de Datos SQLite (archivo local)
const dbPath = path.resolve(__dirname, 'ventas.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos SQL:', err.message);
    } else {
        console.log('Conectado exitosamente a la base de datos SQLite.');
    }
});

// 2. Crear tabla y poblar datos inciciales si no existen (DDL +DML)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS ventas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            producto TEXT NOT NULL,
            precio REAL NOT NULL,
            cantidad INTEGER NOT NULL     
        )
    `);

    // Verificar si la tabla está vacía para insertar los registros base
    db.get('SELECT COUNT(*) AS total FROM ventas', (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }

        if (row.total === 0) {
            const stmt = db.prepare('INSERT INTO ventas (producto, precio, cantidad) VALUES (?, ?, ?)');
            stmt.run('Notebook', 750000, 2);
            stmt.run('Mouse', 15000, 5);
            stmt.run('Teclado', 30000, 3);
            stmt.run('Monitor', 180000, 2);
            stmt.finalize();
            console.log('Datos iniciales de ventas insertados en SQL');
        
        }
    });
});

// --- ENDPOINT REST ---

// Ruta 1: Listar todas las ventas con subtotales calculados
app.get('/api/ventas', (req, res) => {
    const query = 'SELECT id, producto, precio, cantidad, (precio * cantidad) AS subtotal FROM ventas';
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});    


// Ruta 2: Obtener resumen estadísitico / KPIs calculados directamente en SQL
app.get('/api/resumen', (req, res) => {
    const query = `
        SELECT
            SUM(precio * cantidad) AS totalRecaudado,
            SUM(cantidad) AS totalUnidades,
            (SELECT producto FROM ventas ORDER BY precio DESC LIMIT 1) AS productoMasCaro,
            (SELECT MAX(precio) FROM ventas) AS precioMasCaro
        FROM ventas
    `;
    db.get(query, [], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

// Iniciar Servidor
app.listen(PORT, () => {
    console.log(`Servidor Nose.js corriendo en https;//localhost:${PORT}`);
});