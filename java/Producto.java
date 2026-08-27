public class Producto {
    // 1. Atributos: qué características tiene un producto
    private String nombre;   // Tipo texto
    private double precio;   // Tipo numérico decimal

    // 2. Constructor: recibe los valores iniciales al crearlo
    // 'this.nombre' se refiere al atributo de la clase, y 'nombre' al parámetro que entra
    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // 3. Métodos Getters: permiten leer los atributos privados desde afuera
    public String getNombre() {
        return this.nombre;
    }

    public double getPrecio() {
        return this.precio;
    }
}