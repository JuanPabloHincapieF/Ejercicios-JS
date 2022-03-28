// A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que cofla le dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este milllonario compró una máquina que deja pasar solamente a los mayores de edad entre otras cosas...
//             - Dejar pasar solo a los mayores de edad
//             - La primer persona que entre despues de las 2 AM, no paga.

let free = false;

const validarCliente = (time) => {
  let edad = prompt("¿Cual es tu edad?");
  if (edad > 18) {
    if (time >= 2 && time <= 7 && free == false) {
      alert(
        "Puedes pasar, tu entrada es gratis ya que fuiste la primera persona en llegar despues de las 2am"
      );
      free = true;
    } else {
      alert(
        `Puedes pasar, son las ${time}:00Hs, asi que tienes que pagar la entrada`
      );
    }
  } else {
    alert("No puedes entrar porque eres menor de edad");
  }
};

validarCliente(23);
validarCliente(4);
validarCliente(5);
validarCliente(11);
validarCliente(6);
