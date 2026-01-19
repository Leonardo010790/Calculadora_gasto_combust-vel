class Carro {
  constructor(kmPorLitro) {
    // Agora o gasto médio depende do que o usuário digitar
    this.gastoMedioPorKm = 1 / kmPorLitro;
  }

  calcularGasto(distancia, precoCombustivel) {
    return (distancia * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
  }
}

function calcular() {
  // Pegando os valores da tela
  const distancia = document.getElementById("distancia").value;
  const preco = document.getElementById("preco").value;
  const consumo = document.getElementById("consumo").value; // Novo campo
  const campoResultado = document.getElementById("resultado");

  // Validação básica
  if (distancia > 0 && preco > 0 && consumo > 0) {
    // Criamos o carro com o consumo que o usuário digitou
    const meuCarro = new Carro(consumo);

    const valorFinal = meuCarro.calcularGasto(distancia, preco);

    campoResultado.innerHTML = `Para percorrer ${distancia}km, você gastará aproximadamente: <br> 
        <span style="color: #28a745; font-size: 1.2em;">R$ ${valorFinal}</span>`;
  } else {
    campoResultado.innerHTML =
      "Por favor, preencha todos os campos com valores positivos.";
  }
}
