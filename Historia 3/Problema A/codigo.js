/*A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le 1lamaron la atención 3 telefonos especificamente,
El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutaente nada... pero claro:
el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí
entramos nosotros.

- Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
- Cada celular debe tener color, peso, resolución de pantalla, resolución de camara y memoria ram
- Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar */

class telefono {
  constructor(
    color,
    peso,
    resolucionDePantalla,
    resolucionDeCamara,
    memoriaRam
  ) {
    this.color = color;
    this.peso = peso;
    this.resolucionDePantalla = resolucionDePantalla;
    this.resolucionDeCamara = resolucionDeCamara;
    this.memoriaRam = memoriaRam;
    this.encendido = false;
  }
  verInfo() {
    return `El telefono tiene: <br> <b>Color</b> = ${this.color} <br> <b>Peso</b> = ${this.peso} <br> <b>Resolucion de pantalla</b> = ${this.resolucionDePantalla} <br> <b>Resolucion de camara</b> = ${this.resolucionDeCamara} <br> <b>Memoria RAM</b> = ${this.memoriaRam}`;
  }
  prenderApagar() {
    if (this.encendido == false) {
      alert("Telefono encendido");
      this.encendido = true;
    } else {
      alert("Telefono apagado");
      this.encendido = false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("Reiniciando el telefono");
    } else {
      alert("El telefono esta apagado");
    }
  }
  tomarFotos() {
    alert("Foto tomada");
  }
  grabar() {
    alert("Grabando");
  }
}

const celular1 = new telefono("Negro", "150gr", 6.1, "12mpx", "6gb");
const celular2 = new telefono("Blanco", "170gr", 6.5, "15mpx", "4gb");
const celular3 = new telefono("Azul", "190gr", 6.7, "10mpx", "8gb");

document.write(
  `${celular1.verInfo()} <br><br> ${celular2.verInfo()} <br><br> ${celular3.verInfo()} <br><br>`
);

/*celular1.prenderApagar();
celular1.tomarFotos();
celular1.reiniciar();
celular1.grabar();
celular1.prenderApagar();*/
