const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarNumerosParesEImpares(numeros) {
    let pares = 0;
    let impares = 0;

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    return { pares, impares };
}

const numeros = [];

function solicitarNumero() {
  if (numeros.length < 10) {
    rl.question(`Digite o ${numeros.length + 1} número inteiro: `, (numero) => {
      numero = parseInt(numero);

      if (!isNaN(numero)) {
        numeros.push(numero);
      } else {
        console.log("Número inválido. Digite um número inteiro.");
      }

      solicitarNumero();
    });
  } else {
    const estatisticas = contarNumerosParesEImpares(numeros);

    console.log(`Quantidade de números pares: ${estatisticas.pares}`);
    console.log(`Quantidade de números ímpares: ${estatisticas.impares}`);

    rl.close();
  }
}

solicitarNumero();
