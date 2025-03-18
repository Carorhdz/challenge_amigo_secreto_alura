// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listAmigos = [];
// Funcion para agregar amigos
function agregarAmigo() {
  // Se llena el arreglo con los amigos.
  let amigoIngresado = document.getElementById("amigo").value;
  if (amigoIngresado != "") {
    listAmigos.push(amigoIngresado);
    // Agregamos el amigo agrego a lista html.
    document.getElementById("listaAmigos").removeAttribute("hidden");
    agregarElementoLista("listaAmigos", amigoIngresado);
    limpiarInput();
    // Se habilita nuevamente el boton de sortear
    document.querySelector(".button-draw").removeAttribute("disabled");
  } else {
    alert("Debe introducir un valor valido.");
  }
}
// FUncion  limpiar 
function limpiarInput() {
  document.getElementById("amigo").value = "";
}
// Funcion para sortear
function sortearAmigo() {
  let cantAmigos = listAmigos.length;
  // Si hay elementos sorteamos amigo, si no, mostramos mensaje
  if (cantAmigos > 0) {
    let numeroElegido = Math.floor(Math.random() * cantAmigos);

    document.getElementById("listaAmigos").setAttribute("hidden", true);

    // Se obtiene el nombre de la posicion ganadora
    let amigoElegido = listAmigos[numeroElegido];

    // Se imprime elnombre del elegido en pantalla.
    agregarElementoLista("resultado", "El amigo sorteado a sido: " + amigoElegido);

    // Se habilita el boton "Nuevo sorteo"
    document.querySelector(".button-restart").removeAttribute("disabled");

    // Se desahabilita el boton de sortear
    document.querySelector(".button-draw").setAttribute("disabled", true);

    // Se deshabilita el boton agregar.
    document.querySelector(".button-add").setAttribute("disabled", true);

  }else{
    alert("No se agrego a ningun amigo.");
  }
}
// FUncion que agrega un nombre a la lista
function agregarElementoLista(nomLista, valor) {
  let elemento = document.createElement("li");
  elemento.appendChild(document.createTextNode(valor));
  document.getElementById(nomLista).appendChild(elemento);
}
// Funcion de reinicio del sorteo.
function reiniciarSorteo(){
    listAmigos = [];
    
    var ul = document.getElementById("resultado");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    
    var ul = document.getElementById("listaAmigos");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
    
    //habilito boton agregar.
    document.querySelector(".button-add").removeAttribute("disabled");
}
