function validar(titulo){
  if  (titulo == ""){
      alert("No es posible publicar un post sin título” titulo");
      return "error";
  }
  return titulo;
};
function listapost(post)
{
  var lista=[];
  lista.push(post);
  return lista;
}
function mostrarlista(lista)
{
  for(let i=0;i<lista.length;i++){
    return lista[i];
  }
  
}

export default validar;listapost;mostrarlista
