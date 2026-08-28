# Práctica Profesional - Ecosistema Integral de Desarrollo y Analítica

Repositorio de práctica técnica profesional enfocado en el desarrollo full-stack, procesamiento de datos y Business Intelligence, abarcando desde la persistencia relacional hasta el análisis ejecutivo de KPIs.

---

## 🏗️ Arquitectura del Proyecto

El sistema integra un flujo completo de datos a través de múltiples capas:
1. **Modelado y Persistencia:** Esquemas relacionales y consultas en SQL/SQLite junto a modelado orientado a objetos en Java.
2. **Backend API REST:** Servidor en Node.js con Express conectado a base SQLite (`ventas.db`).
3. **Frontend Interactivo:** Interfaz web desarrollada en HTML5, CSS3 y JavaScript moderno conectada asíncronamente vía `fetch()`.
4. **ETL & Analítica:** Procesamiento, limpieza y cálculo de márgenes financieros con Python (`pandas`).
5. **Business Intelligence:** Modelado y visualización ejecutiva en Power BI Desktop.

---

## 📂 Estructura del Directorio

* **`backend-node/`**: Servidor API REST con Express y base de datos SQLite.
* **`frontend/`**: Dashboard web responsivo conectado a los endpoints del backend.
* **`java/`**: Modelado de clases, POO y lógica de negocio en Java.
* **`javascript/`**: Algoritmos, funciones y lógica base en JavaScript.
* **`powerbi/`**: Datasets limpios (`ventas_bi.csv`, `ventas_bi.xlsx`) y reporte analítico (`dashboard_ventas.pbix`).
* **`python/`**: Consumo de APIs externas y scripts de pipeline ETL con Pandas (`exportar_bi.py`).
* **`sql/`**: Consultas DDL/DML, esquemas relacionales y análisis de datos.

---

## 🛠️ Tecnologías Utilizadas

* **Lenguajes:** Java 17, Python 3.x, JavaScript (ES6+), SQL.
* **Backend & Web:** Node.js, Express, CORS, HTML5, CSS3, Fetch API.
* **Analítica & BI:** Pandas, Openpyxl, Power BI Desktop, SQLite3, MySQL Workbench.
* **Control de Versiones:** Git & GitHub (estrategia de ramas por funcionalidad).