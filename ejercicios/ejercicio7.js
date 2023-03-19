function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(numero + " x " + i + " = " + numero * i);
    }
  }
let num = prompt("Ingrese un número para ver su tabla de multiplicar:");
tablaMultiplicar(num);