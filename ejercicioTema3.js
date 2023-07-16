//!  Primera parte:
// Crear una función con tres parámetros que sean números que se suman entre sí.
// Llamar a la función en el main y darle valores.

suma = (a, b, c) => a + b + c;
suma(2, 5, 8);

//! Segunda parte:
// Crear una clase coche.
// Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
// Una función que incremente el número de puertas que tiene el coche.
// Crear un objeto miCoche en el main y añadirle una puerta.
// Mostrar el número de puertas que tiene el objeto.

class Coche {
  constructor() {
    this.numeroPuertas = 0;
  }

  incrementaPuertas() {
    this.numeroPuertas++;
  }
}

let miCoche = new Coche();
miCoche.incrementaPuertas();

console.log("Numero de Puertas: " + miCoche.numeroPuertas);
