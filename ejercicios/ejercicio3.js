let resultados = Array(11).fill(0);
    for (let i = 0; i < 50; i++) {
      let dado1 = Math.floor(Math.random() * 6) + 1;
      let dado2 = Math.floor(Math.random() * 6) + 1;
      let suma = dado1 + dado2;
      resultados[suma - 2]++;
    }

    let tablaResultados = document.getElementById("resultados");
    for (let i = 0; i < resultados.length; i++) {
      let fila = document.createElement("tr");
      let celdaSuma = document.createElement("td");
      let celdaApariciones = document.createElement("td");
      celdaSuma.innerText = i + 2;
      celdaApariciones.innerText = resultados[i];
      fila.appendChild(celdaSuma);
      fila.appendChild(celdaApariciones);
      tablaResultados.appendChild(fila);
    }