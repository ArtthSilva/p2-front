const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularEstatisticas(numeros) {
    let menor = numeros[0];
    let maior = numeros[0];
    let soma = 0;

    for (const numero of numeros) {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
        soma += numero;
    }

    return { menor, maior, soma };
}

rl.question("Digite uma sequência de números separados por espaço: ", (entrada) => {
  const numeros = entrada.split(" ").map(Number);

  if (numeros.length === 0 || numeros.some(isNaN)) {
    console.log("Entrada inválida. Certifique-se de fornecer números separados por espaço.");
    rl.close();
    return;
  }

  const estatisticas = calcularEstatisticas(numeros);

  console.log(`Menor valor: ${estatisticas.menor}`);
  console.log(`Maior valor: ${estatisticas.maior}`);
  console.log(`Soma dos valores: ${estatisticas.soma}`);

  rl.close();
});
