//* Creando la clase Persona
class Persona {
  constructor(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
  }
}

//* Creando la clase Cliente heredada de Persona
class Cliente extends Persona {
  constructor(nombre, edad, telefono, credito) {
    super(nombre, edad, telefono);
    this.credito = credito;
  }
}

//* Creando Objeto de la clase Cliente con valores y mostrando en pantalla
const cliente1 = new Cliente("Andres", 40, "300-300-1234", 1000);

console.log("Nombre: ", cliente1.nombre);
console.log("Edad: ", cliente1.edad);
console.log("Telefono: ", cliente1.telefono);
console.log("Credito: ", cliente1.credito);

//* Creando la clase Trabajador que hereda de Persona y con variable salario
class Trabajador extends Persona {
  constructor(nombre, edad, telefono, salario) {
    super(nombre, edad, telefono);
    this.salario = salario;
  }
}
