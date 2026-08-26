-- 1. Crear y seleccionar la base de datos
CREATE DATABASE IF NOT EXISTS practica_ventas;
USE practica_ventas;

-- 2. Crear la tabla ventas
CREATE TABLE IF NOT EXISTS ventas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    cantidad INT NOT NULL
);

-- 3. Insertar los datos de prueba
INSERT INTO ventas (producto, precio, cantidad) VALUES
('Notebook', 750000, 2),
('Mouse', 15000, 5),
('Teclado', 30000, 3),
('Monitor', 180000, 2);

-- =============================================
-- CONSULTAS Y ACTIVIDADES
-- =============================================

-- Actividad 1: Mostrar todas las ventas
SELECT * FROM ventas;

-- Actividad 2: Mostrar productos con precio > $100.000 (Uso de WHERE)
SELECT producto, precio 
FROM ventas 
WHERE precio > 100000;

-- Actividad 3: Ordenar por precio de mayor a menor
SELECT producto, precio, cantidad 
FROM ventas 
ORDER BY precio DESC;

-- Actividad 4: Calcular el precio promedio (AVG)
SELECT AVG(precio) AS precio_promedio 
FROM ventas;

-- Actividad 5: Calcular unidades vendidas en total (SUM)
SELECT SUM(cantidad) AS total_unidades_vendidas 
FROM ventas;

-- Actividad 6: Calcular ingresos generados por producto (precio * cantidad) ordenados
SELECT 
    producto,
    precio,
    cantidad,
    (precio * cantidad) AS total_ingresos
FROM ventas
ORDER BY total_ingresos DESC;