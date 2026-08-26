ventas = [
    {"producto": "Notebook", "precio": 750000, "cantidad": 2},
    {"producto": "Mouse", "precio": 15000, "cantidad": 5},
    {"producto": "Teclado", "precio": 30000, "cantidad": 3},
    {"producto": "Monitor", "precio": 180000, "cantidad": 2}
]

# 6. CREAR FUNCION PRODUCTO CON MAS INGRESOS

def producto_mayor_ingreso(ventas):
    producto_ganador = max(ventas, key=lambda x: x["precio"] * x["cantidad"])

    return producto_ganador["producto"]

resultado = producto_mayor_ingreso(ventas)
print(f"Producto con mayor ingreso: {resultado}")

'''

#5. PRODUCTO MAS VENDIDO

producto_mas_vendido = max(ventas, key=lambda x: x["cantidad"])

print(f"Producto más vendido: {producto_mas_vendido['producto']}")
print(f"Cantidad: {producto_mas_vendido['cantidad']}")


# 4. PRODUCTO MAS CARO

producto_mas_caro = ventas[0]

for venta in ventas:
    if venta["precio"] > producto_mas_caro["precio"]:
        producto_mas_caro = venta

print(f"Producto más caro: {producto_mas_caro['producto']}")
print (f"Precio: ${producto_mas_caro['precio']}")

# 3. CALCULAR TOTAL GENERAL

def calcular_total(lista_ventas):
    total_general = 0

    for venta in lista_ventas:
        total_producto = venta["precio"] * venta["cantidad"]
        total_general += total_producto
    return total_general

total = calcular_total(ventas)
print(f"Total venta: $ {total}")

total_general = 0

#op 2

for venta in ventas:
    total_producto = venta["precio"] * venta["cantidad"]
    total_general += total_producto


print(f"Total de ventas: $ {total_general}>")

# 2. CALCULAR TOTAL POR PRODUCTO
for venta in ventas:
    nombre = venta["producto"]
    total = venta["precio"] * venta["cantidad"]

    print(f"Producto: {nombre} | Total: ${total}")


# 1. MOSTRAR TODAS LAS VENTAS
for venta in ventas:
    nombre = venta["producto"]
    precio = venta["precio"]
    cantidad = venta["cantidad"]

    print(f"Producto: {nombre} | Precio: ${precio} | Cantidad: {cantidad}")


producto_mayor_ingreso = None
mayor_ingreso = 0

for venta in ventas:

    ingreso = venta["precio"] * venta["cantidad"]

    if ingreso > mayor_ingreso:
        producto_mayor_ingreso = venta["producto"]
        mayor_ingreso = ingreso


print("Producto con mayores ingresos:", producto_mayor_ingreso)
print("Total ingreso:", mayor_ingreso)
'''