let ladoA = parseInt(prompt("Ingrese el valor del lado A: "));
let ladoB = parseInt(prompt("Ingrese el valor del lado B: "));

function calcularPerimetro(a, b) {
  return 2 * (a + b);
}

let perimetro = calcularPerimetro(ladoA, ladoB);

console.log("Lado A: " + ladoA);
console.log("Lado B: " + ladoB);
console.log("Perímetro: " + perimetro);