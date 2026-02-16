document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById("sobre");

  sobre.addEventListener("click", () => {
    sobre.classList.toggle("abierto");
  });
});

