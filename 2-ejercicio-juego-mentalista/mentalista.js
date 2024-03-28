//Para asignar un valor " = "
//parseInt(Math.random()*1000); Añade un numero aleatorio
var numeroSecreto = parseInt(Math.random() * 1000 + 1);
var numeroDeIntentosRestantes = 15;
var numeroDeIntentosHechos = 0;
var perdedor = false;

//BUCLES O CICLOS
//Para diferenciar " == "
while (numeroDeIntentosRestantes > 0) {
    var numeroDigitado = prompt("❓ Adivina el número.\nIngresa un número entre 1 y 1000.");

//CONDICIONALES
//Para comparar " == "
    if (numeroDigitado === null) {
        // El usuario presionó "Cancelar" o cerró el cuadro de diálogo
        break; // Salir del bucle si el usuario cancela
    } else {
        numeroDeIntentosHechos++;
    }

    numeroDigitado = parseInt(numeroDigitado);

    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 1000) {
        alert("Por favor, ingresa un número válido entre 1 y 1000.");
        continue; // Volver a solicitar al usuario que ingrese un número válido
    }

    if (numeroSecreto === numeroDigitado) {
        alert("✅ Acertaste!");
        break; // Salir del bucle si el usuario adivina el número
    } else if (numeroSecreto > numeroDigitado) {
        alert("❌ Fallaste. El número secreto es mayor que " + numeroDigitado + ".");
    } else {
        alert("❌ Fallaste. El número secreto es menor que " + numeroDigitado + ".");
    }

    numeroDeIntentosRestantes--;
    alert("⚡ Intentos realizados: " + numeroDeIntentosHechos + " / 🚩 Intentos restantes: " + numeroDeIntentosRestantes + ".");
}

if (numeroDeIntentosRestantes <= 0) {
    alert("❌ Has perdido.\nYa no tienes más intentos.\nVuelve a iniciar el juego.");
    var perdedor = true;
    console.log("¿El jugador ha perdido?: " + perdedor)
}
