/*c) Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones del Play Store ya que quiere jugar juegos que sean muy populares, que tengan buena puntuación y que pesen poco, pero las 7 apps que 1lamaron su atención son un tanto similares y sabe que si se descarga todas, probablemente juegue con todas, pero él se va a descargar solo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar.

- Crear un sistema que ayude a cofla a decidir cual app descargar.
- La información de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso
- Las Apps se deben poder instalar, abrir, cerrar y desinstalar.
*/

class aplicacion {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  instalar() {
    if (this.instalada == false) {
      alert("se esta instalando la app");
      this.instalada = true;
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      alert("se esta desinstalando la app");
      this.instalada = false;
    }
  }
  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("la app se esta abriendo");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      alert("la app se esta abriendo");
      this.iniciada = false;
    }
  }
  appInfo() {
    return `<b>Descargas:</b> ${this.descargas} <br> <b>Puntuación:</b> ${this.puntuacion} <br> <b>Peso:</b> ${this.peso} <br> `;
  }
}

app1 = new aplicacion("5M", 4.5, "500mb");
app2 = new aplicacion("32.435", 5, "231mb");
app3 = new aplicacion("1000", 3.5, "1gb");
app4 = new aplicacion("2M", 4.2, "400mb");
app5 = new aplicacion("93.483", 2.5, "120mb");
app6 = new aplicacion("10M", 4.7, "423mb");
app7 = new aplicacion("100K", 4.3, "65mb");

document.write(
  `${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `
);
