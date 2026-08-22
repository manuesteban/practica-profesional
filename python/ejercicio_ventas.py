ventas = [
    {"producto": "Notebook", "precio": 750000, "cantidad": 2},
    {"producto": "Mouse", "precio": 15000, "cantidad": 5},
    {"producto": "Teclado", "precio": 30000, "cantidad": 3},
    {"producto": "Monitor", "precio": 180000, "cantidad": 2}
]

producto_mayor_ingreso = None
mayor_ingreso = 0

for venta in ventas:

    ingreso = venta["precio"] * venta["cantidad"]

    if ingreso > mayor_ingreso:
        producto_mayor_ingreso = venta["producto"]
        mayor_ingreso = ingreso


print("Producto con mayores ingresos:", producto_mayor_ingreso)
print("Total ingreso:", mayor_ingreso)