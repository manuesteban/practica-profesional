// 1. Referencias al DOM
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const kpiTotal = document.getElementById("kpi-total");
const kpiUnidades = document.getElementById("kpi-unidades");
const kpiMasCaro = document.getElementById("kpi-mas-caro");

// 2. URLs de la API en Node.js
const API_VENTAS = "http://localhost:3000/api/ventas";
const API_RESUMEN = "http://localhost:3000/api/resumen";

// 3. Función asíncrona para cargar los datos desde la base de datos SQL
async function cargarDatos() {
    try {
        // Consultar métricas (KPIs)
        const respResumen = await fetch(API_RESUMEN);
        const resumen = await respResumen.json();

        kpiTotal.textContent = `$${resumen.totalRecaudado.toLocaleString("es-CL")}`;
        kpiUnidades.textContent = resumen.totalUnidades;
        kpiMasCaro.textContent = `${resumen.productoMasCaro} ($${resumen.precioMasCaro.toLocaleString("es-CL")})`;

        // Consultar listado de ventas
        const respVentas = await fetch(API_VENTAS);
        const ventas = await respVentas.json();

        tablaCuerpo.innerHTML = ""; // Limpiar tabla antes de cargar

        ventas.forEach(v => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td><strong>${v.producto}</strong></td>
                <td>$${v.precio.toLocaleString("es-CL")}</td>
                <td>${v.cantidad}</td>
                <td>$${v.subtotal.toLocaleString("es-CL")}</td>
            `;
            tablaCuerpo.appendChild(fila);
        });

    } catch (error) {
        console.error("Error al conectar con la API de Node.js:", error);
    }
}

// Ejecutar al cargar la página
cargarDatos();