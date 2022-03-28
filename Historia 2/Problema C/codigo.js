// Crear una calculadora que sea capaz de sumar, restar, multiplicar y dividir

let opcion = prompt(
  "¿Que operacion deseas realizar? \n 1. suma \n 2. resta \n 3. multiplicación \n 4. división"
);

num1 = parseInt(prompt("Ingresa el primer numero"));
num2 = parseInt(prompt("Ingresa el segundo numero"));

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

const calculadora = (opcion) => {
  if (opcion == "suma" || opcion == 1) {
    return sumar(num1, num2);
  } else if (opcion == "resta" || opcion == 2) {
    return restar(num1, num2);
  } else if (opcion == "multiplicar" || opcion == 3) {
    return multiplicar(num1, num2);
  } else if (opcion == "dividir" || opcion == 4) {
    return dividir(num1, num2);
  }
};

calculadora(opcion);
