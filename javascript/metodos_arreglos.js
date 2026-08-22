const usuarios = [
    { id: 1, nombre: "Carlos", edad: 24, compras: 120000 },
    { id: 2, nombre: "Scarlett", edad: 31, compras: 450000},
    { id: 3, nombre: "Mauricio", edad: 19, compras: 85000},
    { id: 4, nombre: "Cristian", edad: 35, compras: 560000},
    { id: 5, nombre: "Elena", edad: 17, compras: 300000}
];

// 1. FILTER: Obtener solo usuarios mayores o iguales a 18 años
const mayoresDeEdad = usuarios.filter((usuario) => usuario.edad >= 18);
console.log("--- 1. FILTER (Mayores de edad) ---");
console.log(mayoresDeEdad);

// 2. MAP: Crear una lista de strings con formato para reporte
const etiquetasClientes = usuarios.map((usuario) =>{
    return `Cliente: ${usuario.nombre} | Gasto: $${usuario.compras.toLocaleString('es-CL')}`; 
});
console.log("\n--- 2. MAP (Etiquetas transformadas) ---");
console.log(etiquetasClientes);

//3. FIND: localizar el objeto del usuario con ID 4
const usuarioEncontrado = usuarios.find((usuario) => usuario.id === 4);
console.log("\n--- 3. FIND (Búsqueda por ID 4) ---");
console.log(usuarioEncontrado);

// 4. REDUCE: Acumular la suma total de compras de todos los usuarios
// El '0' al final es el valor inicial del acumulador
const gastoTotal = usuarios.reduce((acumulador, usuario) => {
    return acumulador + usuario.compras;
}, 0);

console.log("\n--- 4. REDUCE (Total acumulado de compras) ---");
console.log(`Total: $${gastoTotal.toLocaleString('es-CL')}`);
