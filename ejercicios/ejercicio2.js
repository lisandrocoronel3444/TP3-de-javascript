let ciudades = [];

while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad(pulsa cancelar para salir):");
  if (ciudad === null) {
    break;
  }
  ciudades.push(ciudad);
}

ciudades.push("París");

document.write("<p>La longitud del arreglo es: " + ciudades.length + "</p>");
document.write("<p>El primer elemento es: " + ciudades[0] + "</p>");
document.write("<p>El tercer elemento es: " + ciudades[2] + "</p>");
document.write("<p>El último elemento es: " + ciudades[ciudades.length - 1] + "</p>");

ciudades[1] = "Barcelona";

document.write("<p>El arreglo actualizado es: " + ciudades.join(", ") + "</p>");


document.write("<h1>Arreglo de ciudades</h1>");
document.write("<ul>");
ciudades.forEach((ciudad, index) => {
  document.write("<li>Elemento " + (index + 1) + ": " + ciudad + "</li>");
});
document.write("</ul>");
