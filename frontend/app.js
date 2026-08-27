// 1. Dataset de ventas (mismos datos usados a lo largo de la semana)
const ventas = [
    { producto: "Notebook", precio: 750000, cantidad: 2 },
    { producto: "Mouse", precio: 15000, cantidad: 5 },
    { producto: "Teclado", precio: 30000, cantidad: 3 },
    { producto: "Monitor", precio: 180000, cantidad: 2 }
];

// 2. Referencias a los elementos del DOM en HTML
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const kpiTotal = document.getElementById("kpi-total");
const kpiUnidades = document.getElementById("kpi-unidades");
const kpiMasCaro = document.getElementById("kpi-mas-caro");

// 3. Variables de cálculo
let totalRecaudado = 0;
let totalUnidades = 0;
let productoMasCaro = ventas[0];

// 4. Procesar y renderizar datos
ventas.forEach(venta => {
    const subtotal = venta.precio * venta.cantidad;
    
    // Acumuladores
    totalRecaudado += subtotal;
    totalUnidades += venta.cantidad;

    // Comparación para encontrar el producto más caro
    if (venta.precio > productoMasCaro.precio) {
        productoMasCaro = venta;
    }

    // Inyectar fila HTML en la tabla
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td><strong>${venta.producto}</strong></td>
        <td>$${venta.precio.toLocaleString("es-CL")}</td>
        <td>${venta.cantidad}</td>
        <td>$${subtotal.toLocaleString("es-CL")}</td>
    `;
    tablaCuerpo.appendChild(fila);
});

// 5. Actualizar los KPIs en las tarjetas
kpiTotal.textContent = `$${totalRecaudado.toLocaleString("es-CL")}`;
kpiUnidades.textContent = totalUnidades;
kpiMasCaro.textContent = `${productoMasCaro.producto} ($${productoMasCaro.precio.toLocaleString("es-CL")})`;