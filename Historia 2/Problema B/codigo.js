// B) Cofla vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir...
// Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere ser programador y se inscribio a la facultad de ingeniería para estudiar desarrollo de software).
// En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad:
// Se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.
//      - Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
//      - Pasados los 30 dias mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
//      - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que está reprobado.

cantidad = prompt("¿Cuantos alumnos son?");
alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
  alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];
}
const asistencias = (nombre, p) => {
  precensia = prompt(nombre);
  if (precensia == "p" || precensia == "P") {
    alumnosTotales[p][1]++;
  }
};
for (i = 0; i < 30; i++) {
  for (alumno in alumnosTotales) {
    asistencias(alumnosTotales[alumno][0], alumno);
  }
}
for (alumno in alumnosTotales) {
  let resultado = `<b>${alumnosTotales[alumno][0]}:</b> <br>
          Asistencias: ${alumnosTotales[alumno][1]} <br>
          Numero de veces que falto: ${
            30 - parseInt(alumnosTotales[alumno][1])
          }`;
  if (30 - alumnosTotales[alumno][1] > 18) {
    resultado += " REPROBADO POR INASISTENCIAS<br>";
  } else {
    resultado += "<br><br>";
  }
  document.write(resultado);
}
