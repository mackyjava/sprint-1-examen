var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;

}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
   var nombreEstudiante= prompt("Ingresa el nombre del Estudiante");
   var puntosTecnicos= prompt("Ingresa puntaje Tecnico");
   var puntosHse = prompt("Ingresa puntaje Hse");

   var estudiante= new Object()
       estudiantes.nombre =nombreEstudiante;
       estudiantes.puntosTecnicos=puntosTecnicos;
       estudiantes.puntosHse=puntosHse;

       estudiantes.push(estudiante);
  }
function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes.puntosTecnicos+ "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

  var nuevaLista =[];
  for (var i=0; i<estudiantes.length; i++){
  var res =  nuevaLista.push(estudiantes[i]);

}return mostrarLista(res);
 }

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
if(nombre==estudiantes.nombre){
  return estudiante;
}
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
     return Math.max.apply(parseInt(estudiantes.puntosTecnicos));
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return Math.max.apply(parseInt(estudiantes.puntosHse));
}
