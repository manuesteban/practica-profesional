import requests

# 1. URL del endpoint de la API
URL = "https://jsonplaceholder.typicode.com/users"

print("Consultando API externa")

# 2. Realizar petición HTTP GET
respuesta = requests.get(URL)

# 3. Validar el estado de la respuesta
if respuesta.status_code == 200:
    # Convertir la respuesta de texto JSON a una lista de diccionarios en Python
    usuarios = respuesta.json()

    print(f"Se obtuvieron {len(usuarios)} registros correctamente.\n")
    print("=== LISTADO DE CLIENTES (DESDE API) ===")

    # 4. Recorrer y extraer datos específicos
    for usuario in usuarios:
        id_usuario = usuario["id"]
        nombre = usuario["name"]
        email = usuario["email"]
        ciudad = usuario["address"]["city"]

        print(f"ID: {id_usuario} | Cliente: {nombre} | Email: {email} | Ciudad: {ciudad}")

else:
    print(f"Error al consultar la API. Código de estado: {respuesta.status_code}")
