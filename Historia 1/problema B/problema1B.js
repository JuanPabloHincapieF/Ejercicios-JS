//  Cofla le regala las vueltas a un vagabundo, este decide que con ese dinero se va a comprar un boleto de loteria :
//      - si le alcanza uno, lo compra
//      - si le alcanza dos, compra dos
//      - si le alcanza tres y le sobra, regala el vuelto
//      - debemos mostrar que compro y el vuelto

let dinero = parseInt(prompt("¿Cuanto dinero tienes?"));
let boleto = parseInt(prompt("¿Cuanto cuesta un boleto de loteria?"));

if (boleto <= dinero && boleto * 2 > dinero) {
  let vuelto = dinero - boleto;
  document.write("Puedes comprar un boleto, tu vuelto es de $" + vuelto);
} else if (boleto * 2 <= dinero && boleto * 3 > dinero) {
  let vuelto = dinero - boleto * 2;
  document.write("Puedes comprar dos boletos, tu vuelto es de $" + vuelto);
} else if (boleto * 3 <= dinero) {
  let vuelto = dinero - boleto * 3;
  document.write("Puedes comprar tres boletos, tu vuelto es de $" + vuelto);
} else {
  document.write("No te alcanza para nada");
}
