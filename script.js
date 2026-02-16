const pantalla1 = document.getElementById("pantalla1");
const pantalla2 = document.getElementById("pantalla2");

let porcentaje = 0;

const agua = document.getElementById("agua");
const corazon = document.getElementById("corazon");
const texto = document.getElementById("porcentaje");

const sobre = document.getElementById("sobre");
const contador = document.getElementById("contador");

/* CLICK CORAZÓN */
corazon.addEventListener("click", () => {

  if (porcentaje >= 100) return;

  porcentaje += 4;
  if (porcentaje > 100) porcentaje = 100;

  texto.textContent = porcentaje + "%";

  const ALTURA_CORAZON = 21;
  const altura = ALTURA_CORAZON * (porcentaje / 100);
  const nuevaY = ALTURA_CORAZON - altura;

  agua.setAttribute("height", altura);
  agua.setAttribute("y", nuevaY);

  if (porcentaje === 100) {

    setTimeout(() => {

      pantalla1.classList.remove("visible");
      pantalla1.classList.add("oculto");

      setTimeout(() => {
        pantalla2.classList.remove("oculto");
        pantalla2.classList.add("visible");
      }, 500);

    }, 400);
  }
});

/* ABRIR SOBRE */
sobre.addEventListener("click", () => {
  sobre.classList.toggle("abierto");
});

/* CONTADOR */
const fechaInicio = new Date("2023-06-15");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

  contador.textContent =
    `Llevamos ${dias} días y ${horas} horas juntos ❤️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
