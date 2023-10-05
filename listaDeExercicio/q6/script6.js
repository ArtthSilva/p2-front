const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
    const taxaDecimal = taxaJuros / 100;

    const montante = capitalInicial * Math.pow(1 + taxaDecimal, tempoMeses);

    const montanteArredondado = montante.toFixed(2);

    return montanteArredondado;
}

rl.question("Digite o capital inicial investido: ", (capitalInicial) => {
  rl.question("Digite a taxa de juros mensal (em percentual): ", (taxaJuros) => {
    rl.question("Digite o tempo do investimento em meses: ", (tempoMeses) => {
      capitalInicial = parseFloat(capitalInicial);
      taxaJuros = parseFloat(taxaJuros);
      tempoMeses = parseInt(tempoMeses);

      const resultado = calcularMontante(capitalInicial, taxaJuros, tempoMeses);

      console.log(`O montante após ${tempoMeses} meses será de R$ ${resultado}`);

      rl.close();
    });
  });
});
