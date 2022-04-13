/*B) Cofla no está satisfecho con los celulares así que decide ir a la sección de celulares de alta gama, donde va a poder
encontrar los celulares mas caros del lugar, así que al entrar vió dos celulares que le encantaron, estos 2 celulares de alta
gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores características y además pueden grabar en
camara super lenta, tiene reconocimiento facial y una camara extra.

- Implementar todas estas cualidades en los celulares de alta gama      */

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
    return `El telefono tiene: <br> <b>Color</b> = ${this.color} <br> <b>Peso</b> = ${this.peso} <br> <b>Resolucion de pantalla</b> = ${this.resolucionDePantalla} <br> <b>Resolucion de camara</b> = ${this.resolucionDeCamara} <br> <b>Memoria RAM</b> = ${this.memoriaRam} <br>`;
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

class telefonoAltaGama extends telefono {
  constructor(
    color,
    peso,
    resolucionDePantalla,
    resolucionDeCamara,
    memoriaRam,
    camaraExtra
  ) {
    super(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRam);
    this.camaraExtra = camaraExtra;
  }
  grabarVideoLento() {
    alert("Estas grabando un video super lento");
  }
  recFacial() {
    alert("El telefono hará un reconocimiento facial");
  }
  infoAltaGama() {
    return (
      this.verInfo() + `<b>Resolucion de camara extra: </b> ${this.camaraExtra}`
    );
  }
}

const celularAltaGama1 = new telefonoAltaGama(
  "Negro",
  "150gr",
  6.1,
  "12mpx",
  "6gb",
  "30mpx"
);
const celularAltaGama2 = new telefonoAltaGama(
  "Rojo",
  "170gr",
  6.5,
  "15mpx",
  "4gb",
  "40mpx"
);

document.write(
  `${celularAltaGama1.infoAltaGama()} <br><br> ${celularAltaGama2.infoAltaGama()} <br><br>`
);

celularAltaGama1.grabarVideoLento();
celularAltaGama2.recFacial();
