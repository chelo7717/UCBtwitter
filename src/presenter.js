//import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulopost = titulo.value;
  const detallepost = detalle.value;

  div.innerHTML = "<p>" + "Titulo: " + titulopost + "<br>" + "Detalle: " + detallepost +  "</p>";
});
