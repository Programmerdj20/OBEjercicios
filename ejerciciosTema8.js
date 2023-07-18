//* Creando Clase y Constructor

class Persona {
  constructor() {
    this._edad = 0;
    this._nombre = "";
    this._telefono = "";
  }
  //* get y set para la propiedad edad
  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }

  //* get y set para la propiedad nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }

  //* get y set para la propiedad telefono
  get telefono() {
    return this._telefono;
  }

  set telefono(valor) {
    this._telefono = valor;
  }
}

//* Creando un nuevo objeto Persona
const persona = new Persona();

//* Asignando valor a las propiedades
persona.edad = 40;
persona.nombre = "Andres";
persona.telefono = "300-300-1234";

//* Mostrando en pantalla
console.log("Edad:", persona.edad);
console.log("Nombre:", persona.nombre);
console.log("Telefono:", persona.telefono);
