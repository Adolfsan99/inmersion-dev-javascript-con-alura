// Variables para las cotizaciones
var valorEnDolar = 0;
var cotizacionDelDolar = 3862; // Suponiendo que es la cotización actual del dólar a pesos colombianos
var cotizacionDoge = 0.5; // Cotización actual del dogecoin en pesos colombianos

// Variables para la selección de divisa
var divisa = 0;
var divisanombre = "";

// Saludo al usuario
var nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Hola, " + nombre + "! Bienvenido.");

// Selección de divisa
divisa = prompt("Escoja en qué divisa quiere convertir sus dólares: \n1. Peso colombiano \n2. Peso mexicano \n3. Peso argentino \n4. Real brasileño \n5. Sol peruano \n6. Peso chileno \n7. Peso uruguayo");
console.log("Hola, " + nombre + ", seleccionaste la divisa " + divisa + ".");

// Asignar el nombre de la divisa seleccionada
switch (divisa) {
    case '1':
        divisanombre = "Peso colombiano";
        var cotizacionDelDolar = 3866;
        break;
    case '2':
        divisanombre = "Peso mexicano";
        var cotizacionDelDolar = 16;
        break;
    case '3':
        divisanombre = "Peso argentino";
        var cotizacionDelDolar = 857;
        break;
    case '4':
        divisanombre = "Real brasileño";
        var cotizacionDelDolar = 4;
        break;
    case '5':
        divisanombre = "Sol peruano";
        var cotizacionDelDolar = 3;
        break;
    case '6':
        divisanombre = "Peso chileno";
        var cotizacionDelDolar = 979;
        break;
    case '7':
        divisanombre = "Peso uruguayo";
        var cotizacionDelDolar = 37;
        break;
    default:
        divisanombre = "Moneda no identificada";
        break;
}

// Solicitar el número de dólares a convertir
valorEnDolar = prompt("Escriba el número de dólares a convertir a su moneda anteriormente seleccionada.");
console.log("Hola, " + nombre + ", seleccionaste la divisa " + divisa + " para convertir " + valorEnDolar + " dólares.");

// Cálculo de valores en base a las selecciones del usuario 1
var valorEnPesos = valorEnDolar * cotizacionDelDolar;
// Resultado 1
alert("Hola " + nombre + ", tienes $" + valorEnPesos + " en " + divisanombre + ".");

// Conversión de dogecoins
var dogecoin = prompt("Ahora escribe el número de dogecoins a convertir:");
console.log("Hola, " + nombre + ", seleccionaste " + dogecoin + " dogecoins.");

// Cálculo de valores en base a las selecciones del usuario 2
var operaciondogecoin = dogecoin * cotizacionDoge;
// Resultado 2
alert("El valor de " + dogecoin + " dogecoins convertidos es: $" + operaciondogecoin.toFixed(2) + " dolares.");

// Conversión de temperatura
var temperatura = prompt("Ahora escribe la temperatura actual en Celsius para convertirla a Fahrenheit:");
console.log("Hola, " + nombre + ", seleccionaste " + temperatura + " °C para convertir a Fahrenheit.");

// Cálculo de valores en base a las selecciones del usuario 3
var operacionTemperatura = temperatura * 9 / 5 + 32;
// Resultado 3
alert("La temperatura en Fahrenheit es: " + operacionTemperatura.toFixed(2) + " °F.");

alert("Cerramos la sesion.\nVuelve a interlo, recargando la pagina");