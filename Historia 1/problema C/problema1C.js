//En el barrio hubo un asecinato, habian tres sospechosos, se utiliza un dectector de mentiras que tiene un 100% de acertar, el detector de mentiras hace esto:
//    - si miente, le da una descarga
//    - si no miente, no hace nada
//    - si el aparato no se decide, aclarar que la pregunta debe ser mas concreta

sospechoso1 = prompt(
  "el sospechoso 1 ¿mintio?" +
    "\n" +
    "pon 1 si esta mintiendo" +
    "\n" +
    "pon 2 si esta diciendo la verdad"
);
sospechoso2 = prompt(
  "el sospechoso 2 ¿mintio?" +
    "\n" +
    "pon 1 si esta mintiendo" +
    "\n" +
    "pon 2 si esta diciendo la verdad"
);
sospechoso3 = prompt(
  "el sospechoso 3 ¿mintio?" +
    "\n" +
    "pon 1 si esta mintiendo" +
    "\n" +
    "pon 2 si esta diciendo la verdad"
);

if (sospechoso1 == 1) {
  alert("el sospechoso 1 esta mintiendo, darle descarga");
} else if (sospechoso1 == 2) {
  alert("el sospechoso 1 no mintio, no darle descarga");
} else {
  alert("no sabemos si el sospechoso 1 esta mintiendo, preguntemos denuevo");
}

if (sospechoso2 == 1) {
  alert("el sospechoso 2 esta mintiendo, darle descarga");
} else if (sospechoso2 == 2) {
  alert("el sospechoso 2 no mintio, no darle descarga");
} else {
  alert("no sabemos si el sospechoso 2 esta mintiendo, preguntemos denuevo");
}

if (sospechoso3 == 1) {
  alert("el sospechoso 3 esta mintiendo, darle descarga");
} else if (sospechoso3 == 2) {
  alert("el sospechoso 3 no mintio, no darle descarga");
} else {
  alert("no sabemos si el sospechoso 3 esta mintiendo, preguntemos denuevo");
}
