//Forma optima de crear una lista, en este caso, de imagenes.
var vistaVideojuegos = [
    "https://i.ebayimg.com/images/g/RJgAAOSwwy9lB-te/s-l1600.jpg",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/05/sleeping-dogs.jpg",
    "https://m.media-amazon.com/images/M/MV5BM2RiNmMyOWQtYjRjYy00NTRkLThmMjEtY2FjZTY5YjQyZGM5XkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_FMjpg_UX1000_.jpg",
    "https://static.wikia.nocookie.net/gtawiki/images/6/65/GTAOnline-BoxArt.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Grand_Theft_Auto_IV_cover.jpg/220px-Grand_Theft_Auto_IV_cover.jpg"
];

//1 RETO DE NOMBRE DE LAS Videojuegos
var nombreVideojuegos = [
    "⭐93/100 Baldurs Gate 3 ",
    "⭐90/100 Sleeping Dogs",
    "⭐87/100 Earth Defense Force 4",
    "⭐80/100 Grand Theft Auto: Online",
    "⭐87/100 Grand Theft Auto 4"
];

//2 RETO DE UTILIZACIÓN DE PUSH
vistaVideojuegos.push('https://i.pinimg.com/736x/5e/7e/7a/5e7e7a86893ae2ff1cf0c0c23b9faa11.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/GTA3boxcover.jpg/220px-GTA3boxcover.jpg', 'https://upload.wikimedia.org/wikipedia/en/4/4c/Guitar_Hero_World_Tour.jpg', 'https://upload.wikimedia.org/wikipedia/en/9/93/Guitar-hero-iii-cover-image.jpg', 'https://m.media-amazon.com/images/I/712E-TkNJdL._AC_UF1000,1000_QL80_.jpg', '');
nombreVideojuegos.push('⭐87/100 Grand Theft Auto SA', '⭐80/100 Grand Theft Auto III', '⭐90/100 Guitar Hero World Tour', '⭐90/100 Guitar Hero III', '⭐85/100 Los Sims 4', '');

//CREANDO UN CICLO FOR
for (var index = 0; index < vistaVideojuegos.length; index++) {
    //3 RETO DE IMAGENES SOPORTADAS JPG
    if (!vistaVideojuegos[index].endsWith(".jpg")) {
        alert("❌Imagen no válida en el índice " + index + ".\n¡Solo imagenes .jpg son validas!");
    }
    document.write('<div><img src=" + vistaVideojuegos[index] + "><p style='color: white;'>" + nombreVideojuegos[index] + "<p/></div>');
}
