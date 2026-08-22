const API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function obtenerPosts() {
    const res = await fetch(API_URL);
    const datos = await res.json();
    console.log('--- 1. GET (Primeros 2 registros) ---');
    console.log(datos.slice(0, 2));
}

async function crearPosts(){
    const nuevo = { title: 'Reporte de ventas', body: 'Datos actualizados', userId: 1 };
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nuevo)
    });
    const datos = await res.json();
    console.log('\n--- 2. POST (Elemento creado con ID asignado) ---');
    console.log(datos);
}

async function actualizarPost(id){
    const editado = { id: id, title: 'Reporte MODIFICADO', body: 'Contenido corregido', userId: 1 };
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editado)
    });
    const datos = await res.json();
    console.log(`\n--- 3. PUT (Registro ${id} actualizado) ---`);
    console.log(datos);
}

async function eliminarPost(id){
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE'});
    console.log(`\n--- 4. DELETE (Código de respuesta status: ${res.status}) ---`);
}

async function iniciar(){
    await obtenerPosts();
    await crearPosts();
    await actualizarPost(1);
    await eliminarPost(1);
}

iniciar();