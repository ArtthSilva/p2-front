const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let qntHomem = 0;
let qntMulher = 0;
let mediaAltura = 0;
let menorAltura = Number.POSITIVE_INFINITY;
let maiorAltura = Number.NEGATIVE_INFINITY;

async function run() {
  for (let i = 0; i < 3; i++) {
    console.log(`Rodada ${i + 1}`);
    
    const genero = await questionAsync('Informe seu gênero: ');
    const valorAltura = await questionAsync('Informe a sua altura: ');

    const altura = parseFloat(valorAltura.replace(',', '.'));

    if ((genero === 'f' || genero === 'F') && altura > 0 && !isNaN(altura)) {
      qntMulher++;
    } else if ((genero === 'm' || genero === 'M') && altura > 0 && !isNaN(altura)) {
      qntHomem++;
      mediaAltura += altura;
    } else {
      console.log('Gênero ou altura informada não é válida');
    }

    if (altura > maiorAltura) {
      maiorAltura = altura;
    }
    if (altura < menorAltura) {
      menorAltura = altura;
    }
  }

  rl.close();
  printResult();
}

function questionAsync(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function printResult() {
  console.log('Maior altura: ' + maiorAltura.toFixed(2));
  console.log('Menor altura: ' + menorAltura.toFixed(2));
  console.log('Quantidade de mulheres: ' + qntMulher);
  console.log('Quantidade de homens: ' + qntHomem);
  console.log('Média de altura dos homens: ' + (mediaAltura / qntHomem).toFixed(2));
}

run();
