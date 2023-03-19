function esPar(numero) {
    if (numero % 2 === 0) {
      return "El número " + numero + " es par";
    } else {
      return "El número " + numero + " es impar";
    }
  }
  document.write(esPar(4) + "<br>");
  document.write(esPar(7) + "<br>");