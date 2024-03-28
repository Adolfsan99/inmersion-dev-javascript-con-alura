
//Crear un array en forma variable (la informacion se pierde)
//var info = []

// Declaración del array info y recuperación de datos de localStorage al cargar la página
var info = JSON.parse(localStorage.getItem('info')) || [];

function agregarPelicula(){

    //Utilizaremos una variable en la cual capturamos usando getElementById('pelicula').value el contenido
    //Ingresado en el input con la id de 'pelicula', de esta forma, lo que ingrese el usuario, podra ser
    //utilizado para crear la imagen de la pelicula dentro del componente div 'listaPeliculas'
    var peliculaFavorita = document.getElementById('pelicula').value
    var peliculaTrailer = document.getElementById('trailer').value

    //Esta variable define el elemento ñistaPeliculas para ser utilizado como contenedor
    var elementoListaPeliculas = document.getElementById('listaPeliculas')

    //Utilizamos el contenedor, y asignamos una suma de imagen, de esta forma forma, podemos ingresar, varias peliculas, es muy importante tener en cuenta la suma, si no fuera una suma, el contenido seria remplazado

    // RETO 1: Verificar si la imagen es válida
    if (peliculaTrailer === "") { 
        alert("¡Error!:\n❌Todos los campos deben estar llenos.");
        } else if (peliculaFavorita.includes(".jpg") || peliculaFavorita.includes(".png") || peliculaFavorita.includes(".webp"))
        {

        var indicePelicula = info.length;

                //RETO 2: Guardar la informacion en un array
                info.push({ pelicula: peliculaFavorita, trailer: peliculaTrailer, infice: indicePelicula});
                guardarInfo(); // Llama a la función para guardar la información en localStorage
                console.log(info)

        console.log('✅Se ha añadido un nuevo contenido, su indice es ' + (info.length - 1) + '.')
        alert('✅Se ha añadido un nuevo contenido, su indice es ' + (info.length - 1) + '.')

        //RETO 3: Se incluyo un nuevo campo para añadir un trailer
        elementoListaPeliculas.innerHTML = elementoListaPeliculas.innerHTML + '<a href=' + peliculaTrailer + ' target="_blank"><p style="color: white;">Indice: ' + indicePelicula + '</p><img src=' + peliculaFavorita + '></a>'
        console.log("La imagen es válida.");

        } else {
        alert("¡Error!:\n❌La imagen no es válida.");
        }

    //Limpia el input al ingresar una pelicula para que el usuario no tenga que borrarlo manualmente
    document.getElementById('pelicula').value = ''
    document.getElementById('trailer').value = ''
}

// Función para guardar la información en localStorage
function guardarInfo() {
    localStorage.setItem('info', JSON.stringify(info));
}

// Llamada inicial para cargar la información al cargar la página
window.onload = function() {
    // Recorre el array info y genera el HTML necesario para mostrar las películas en la página
    var listaPeliculasHTML = '';
    info.forEach(function(pelicula, indice) {
        listaPeliculasHTML += '<a href="' + pelicula.trailer + '" target="_blank">';
        listaPeliculasHTML += '<p style="color: white;">Indice: ' + indice + '</p>';
        listaPeliculasHTML += '<img src="' + pelicula.pelicula + '">';
        listaPeliculasHTML += '</a>';
    });

    // Coloca el HTML generado dentro del contenedor listaPeliculas
    document.getElementById('listaPeliculas').innerHTML = listaPeliculasHTML;
};

function eliminarPelicula() {
    // Paso 1: Solicitar al usuario que ingrese el índice de la película a eliminar
    var indiceEliminar = prompt("❌Eliminar contenido:\nIngresa el índice del contenido que deseas eliminar:");

    // Paso 2: Convertir el índice a un número entero
    indiceEliminar = parseInt(indiceEliminar);

    // Paso 3: Verificar si el índice es válido
    if (isNaN(indiceEliminar) || indiceEliminar < 0 || indiceEliminar >= info.length) {
        console.log("El índice ingresado no es válido.");
        return; // Salir de la función si el índice no es válido
    }

    // Paso 4: Eliminar la película del array info
    var peliculaEliminada = info.splice(indiceEliminar, 1);

    // Paso 5: Mostrar un mensaje en la consola con la película eliminada
    console.log("✅Se ha eliminado la película: ", peliculaEliminada);

    // Paso 6: Actualizar el localStorage con el nuevo array info (opcional)
    guardarInfo();

    // Paso 7: Actualizar la visualización en la página (si es necesario)
    actualizarVisualizacion();
}

// Función para actualizar la visualización en la página (puede ser similar a la que utilizas para cargar inicialmente)
function actualizarVisualizacion() {
    // Redirige a la página actual para actualizar la visualización
    window.location.reload();
}