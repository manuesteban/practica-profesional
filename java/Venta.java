public class Venta {
    // 1. Atributos
    private Producto producto; // Contiene un objeto de tipo Producto
    private int cantidad;      // Número entero

    // 2. Constructor
    public Venta(Producto producto, int cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    // 3. Getters
    public Producto getProducto() {
        return this.producto;
    }

    public int getCantidad() {
        return this.cantidad;
    }

    // 4. Método de cálculo: calcula precio * cantidad
    public double calcularSubtotal() {
        return this.producto.getPrecio() * this.cantidad;
    }
}