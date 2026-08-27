import java.util.ArrayList; // Permite usar listas dinámicas (equivalente a las listas de Python)

public class Main {
    public static void main(String[] args) {

        // 1. Declarar una lista dinámica que solo almacena objetos de tipo 'Venta'
        ArrayList<Venta> ventas = new ArrayList<>();

        // 2. Crear objetos y agregarlos a la lista con .add()
        // new Producto("Notebook", 750000) crea el producto
        // new Venta(producto, 2) crea la venta que envuelve a ese producto
        ventas.add(new Venta(new Producto("Notebook", 750000), 2));
        ventas.add(new Venta(new Producto("Mouse", 15000), 5));
        ventas.add(new Venta(new Producto("Teclado", 30000), 3));
        ventas.add(new Venta(new Producto("Monitor", 180000), 2));

        // 3. Variable acumuladora para el total general
        double totalGeneral = 0;

        Producto productoMasCaro = ventas.get(0).getProducto();

        System.out.println("=== REPORTE DE VENTAS (JAVA) ===");

        // 4. Bucle for-each: recorre cada elemento 'v' dentro de la lista 'ventas'
        for (Venta v : ventas) {
            String nombre = v.getProducto().getNombre();
            double precio = v.getProducto().getPrecio();
            int cantidad = v.getCantidad();
            double subtotal = v.calcularSubtotal();

            // Acumular al total general
            totalGeneral += subtotal;

            // Comparación: si el precio del producto actual es mayor al que tenemos guardado,
            // actualizamos la variable con el nuevo producto ganador
            if (precio > productoMasCaro.getPrecio()) {
                productoMasCaro = v.getProducto();

            }

            // Imprimir en consola con formato
            System.out.println("Producto: " + nombre + " | Precio: $" + precio + " | Cantidad: " + cantidad + " | Subtotal: $" + subtotal);
        }

        System.out.println("--------------------------------------------------");
        System.out.println("TOTAL GENERAL RECAUDADO: $" + totalGeneral);
        System.out.println("PRODUCTO MÁS CARO: " + productoMasCaro.getNombre() + " ($" + productoMasCaro.getPrecio() + ")");
        
    }

}