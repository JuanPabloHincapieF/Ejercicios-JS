/* HISTORIA DE COFLA 1
A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos.

Roberto tiene $1.5 USD
Pedro tiene $1.7 USD
Cofla tiene $3 USD

Los precios de los helados son los siguientes:
Paleta de agua: $0.6 USD
Helado de crema: $1 USD
Helado marca heladito: $1.6 USD
Helado marca chococono: $1.7 USD
Helado marca popsy: $1.8 USD
Tarrito de helado Popsy:  $2.9 USD
Pote 1/4 KG: $2.9 USD

CREAR SOLUCIONES:
-Pedirles que ingresen el monto que tienen y  mostrarles el helado mas caro que pueden pagar.
-Si hay 2 o mas con el mismo precio, mostrar ámbos.
-Cofla quiere saber cuanto es el vuelto.
*/
dineroRoberto = prompt("Roberto, ¿Cuanto dinero tienes?");
dineroPedro = prompt("Pedro, ¿Cuanto dinero tienes?");
dineroCofla = prompt("Cofla, ¿Cuanto dinero tienes?");

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("Roberto, comprate el helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("Roberto, comprate el helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto, comprate el helado heladito");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto, comprate el helado chococono");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto, comprate el helado popsy");
} else if (dineroRoberto >= 2.9) {
  alert(
    "Roberto, puedes comprarte el tarrito de helado popsy o el pote de 1/4KG"
  );
} else {
  alert("Roberto, No te alcanza para ningun helado");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro, comprate el helado de agua");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro, comprate el helado de crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro, comprate el helado heladito");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro, comprate el helado chococono");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro, comprate el helado popsy");
} else if (dineroPedro >= 2.9) {
  alert(
    "Pedro, puedes comprarte el tarrito de helado popsy o el pote de 1/4KG"
  );
} else {
  alert("Pedro, No te alcanza para ningun helado");
}

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  let vuelto = dineroCofla - 0.6;
  alert("Cofla, comprate el helado de agua " + `tu vuelto es ${vuelto}`);
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  let vuelto = dineroCofla - 1;
  alert("Cofla, comprate el helado de crema " + `tu vuelto es ${vuelto}`);
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  let vuelto = dineroCofla - 1.6;
  alert("Cofla, comprate el helado heladito " + `tu vuelto es ${vuelto}`);
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  let vuelto = dineroCofla - 1.7;
  alert("Cofla, comprate el helado chococono " + `tu vuelto es ${vuelto}`);
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  let vuelto = dineroCofla - 1.8;
  alert("Cofla, comprate el helado popsy " + `tu vuelto es ${vuelto}`);
} else if (dineroCofla >= 2.9) {
  let vuelto = dineroCofla - 2.9;
  alert(
    "Cofla, puedes comprarte el tarrito de helado popsy o el pote de 1/4KG " +
      `Tu vuelto es ${vuelto}`
  );
} else {
  alert("Cofla, No te alcanza para ningun helado");
}
