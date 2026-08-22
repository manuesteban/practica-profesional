USE practica_ventas;
CREATE TABLE ventas (
id INT PRIMARY KEY AUTO_INCREMENT,
producto VARCHAR(100),
PRECIO decimal(10,2),
cantidad INT
);

INSERT INTO ventas (producto, precio, cantidad)
VALUES
('Notebook', 750000, 2),
('Mouse', 15000, 5),
('Teclado', 30000, 3),
('Monitor', 180000, 2);



SELECT producto, precio
FROM ventas
ORDER BY precio DESC;

SELECT AVG(precio)
AS precio_promedio
FROM ventas;

SELECT SUM(cantidad)
AS total_unidades
FROM ventas;

SELECT producto, precio, cantidad,
precio * cantidad AS total
FROM ventas
ORDER BY total DESC;