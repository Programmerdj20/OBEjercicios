//! PUNTO 1
// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
// Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

let numeroIf;
if (numeroIf < 0) return false;
if (numeroIf > 0) return true;
numeroIf = 0;

//! PUNTO 2
// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3,
// el bloque de código que tendrá el bucle deberá:
// Incrementar el valor de la variable en uno cada vez que se ejecute.
// Mostrarlo por pantalla cada vez que se ejecute.

let numeroWhile = 0;
while (numeroWhile < 3) {
  numeroWhile++;
  console.log(numeroWhile);
}

//!PUNTO 3
// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

let numeroDoWhile = 0;
do {
  numeroDoWhile++;
  console.log(numeroDoWhile);
} while (numeroDoWhile < 1);

//!PUNTO 3
// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable
// sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
  console.log(numeroFor);
}

//! PUNTO 4
// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
// Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la
// que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.

let estación = "otoño";
switch (estación) {
  case "primavera":
    console.log("Estamos en Primavera");
    break;

  case "verano":
    console.log("Estamos en Verano");
    break;

  case "otoño":
    console.log("Estamos en Otoño");
    break;

  case "invierno":
    console.log("Estamos en Invierno");
    break;

  default:
    console.log("No has ingresado una estación valida");
    break;
}
