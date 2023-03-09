import validar from "./twitter";
import listapost from "./twitter"
import mostrarlista from "./twitter"

const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const form = document.querySelector("#post-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");
var lista=[];
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titulopost = titulo.value;
  const detallepost = detalle.value;
  var post = "Titulo:" + titulopost+ "<br>" + "Detalle:" + detallepost +"<br>";
  event.preventDefault();

  lista+=listapost(post);

  div.innerHTML = "<p>" + "Titulo: " + validar(titulopost) + "<br>" + "Detalle: " + detallepost +  "</p>";
  div2.innerHTML ="LISTA DE POSTS: "+"<br>"+ mostrarlista(lista);

});
