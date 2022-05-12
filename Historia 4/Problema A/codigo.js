/* -Cofla esta terminando el primer semestre del primer ciclo, la tarea que debe realizar es mucho mas avanzada que la de antes, ademas de suma, resta, multiplicacion y division ahora tambien tiene que calcular potencias, raices cuadradas y cubicas.
- Perfeccionar calculadora para poder implementar las nuevas funciones.
*/

let opcion = prompt(
  "¿Que operacion deseas realizar? \n 1. suma \n 2. resta \n 3. multiplicación \n 4. división \n 5. potenciar \n 6. raiz cuadrada \n 7. raiz cubica"
);

const sumar = (num1, num2) => {
  alert(num1 + num2);
};
const restar = (num1, num2) => {
  alert(num1 - num2);
};
const multiplicar = (num1, num2) => {
  alert(num1 * num2);
};
const dividir = (num1, num2) => {
  alert(num1 / num2);
};
const potenciar = (num1, num2) => {
  alert(num1 ** num2);
};
const raizCuadrada = (num) => {
  alert(Math.sqrt(num));
};
const raizCubica = (num) => {
  alert(Math.cbrt(num));
};

const calculadora = (opcion) => {
  if (opcion == "suma" || opcion == 1) {
    let num1 = parseInt(prompt("Ingresa el primer numero a sumar"));
    let num2 = parseInt(prompt("Ingresa el segundo numero a sumar"));
    return sumar(num1, num2);
  } else if (opcion == "resta" || opcion == 2) {
    let num1 = parseInt(prompt("Ingresa el primer numero de la resta"));
    let num2 = parseInt(prompt("Ingresa el segundo numero de la resta"));
    return restar(num1, num2);
  } else if (opcion == "multiplicar" || opcion == 3) {
    let num1 = parseInt(prompt("Ingresa el primer numero a multiplicar"));
    let num2 = parseInt(prompt("Ingresa el segundo numero a multiplicar"));
    return multiplicar(num1, num2);
  } else if (opcion == "dividir" || opcion == 4) {
    let num1 = parseInt(prompt("Ingresa el primer numero a dividir"));
    let num2 = parseInt(prompt("Ingresa el segundo numero a dividir"));
    return dividir(num1, num2);
  } else if (opcion == "potenciar" || opcion == 5) {
    let num1 = parseInt(prompt("Ingresa el numero a exponenciar"));
    let num2 = parseInt(prompt("Ingresa el exponente"));
    return potenciar(num1, num2);
  } else if (opcion == "raiz cuadrada" || opcion == 6) {
    let num = prompt("numero al que se le va a sacar la raiz cuadrada");
    return raizCuadrada(num);
  } else if (opcion == "raiz cubica" || opcion == 7) {
    let num = prompt("numero al que se le va a sacar la raiz cubica");
    return raizCubica(num);
  }
};

calculadora(opcion);
