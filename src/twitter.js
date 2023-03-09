function validar(titulo){
  if  (titulo == ""){
      alert("No es posible publicar un post sin título” titulo");
      return "error";
  }
  return titulo;
};

export default validar;
