import os
from pathlib import Path
import pandas as pd
from datetime import datetime, timedelta

# 1. Obtener la raíz del proyecto dinámicamente
# Path(__file__).resolve().parent apunta a /python
# .parent sube un nivel a /practica-profesional
raiz_proyecto = Path(__file__).resolve().parent.parent
carpeta_powerbi = raiz_proyecto / "powerbi"

# Asegurar que la carpeta powerbi exista en la raíz
carpeta_powerbi.mkdir(parents=True, exist_ok=True)

# 2. Dataset de ventas históricas (8 registros consistentes)
data = {
    "ID_Venta": [1, 2, 3, 4, 5, 6, 7, 8],
    "Fecha": [
        (datetime.today() - timedelta(days=7)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=6)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=5)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=4)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=3)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=2)).strftime("%Y-%m-%d"),
        (datetime.today() - timedelta(days=1)).strftime("%Y-%m-%d"),
        datetime.today().strftime("%Y-%m-%d")
    ],
    "Producto": ["Notebook", "Mouse", "Teclado", "Monitor", "Notebook", "Teclado", "Mouse", "Monitor"],
    "Categoria": ["Computación", "Accesorios", "Accesorios", "Pantallas", "Computación", "Accesorios", "Accesorios", "Pantallas"],
    "Precio_Unitario": [750000, 15000, 30000, 180000, 750000, 30000, 15000, 180000],
    "Costo_Unitario": [550000, 8000, 16000, 120000, 550000, 16000, 8000, 120000],
    "Cantidad": [2, 5, 3, 2, 1, 4, 10, 3]
}

df = pd.DataFrame(data)

# 3. Transformación Analítica y KPIs
df["Ingreso_Total"] = df["Precio_Unitario"] * df["Cantidad"]
df["Costo_Total"] = df["Costo_Unitario"] * df["Cantidad"]
df["Margen_Bruto"] = df["Ingreso_Total"] - df["Costo_Total"]
df["Margen_Pct"] = ((df["Margen_Bruto"] / df["Ingreso_Total"]) * 100).round(2)

# 4. Exportar a la carpeta raíz /powerbi
ruta_csv = carpeta_powerbi / "ventas_bi.csv"
ruta_xlsx = carpeta_powerbi / "ventas_bi.xlsx"

df.to_csv(ruta_csv, index=False, encoding="utf-8-sig")
df.to_excel(ruta_xlsx, index=False)

print("=== ARCHIVOS GENERADOS EN LA RAÍZ /powerbi ===")
print(f"Ubicación CSV:  {ruta_csv}")
print(f"Ubicación XLSX: {ruta_xlsx}")