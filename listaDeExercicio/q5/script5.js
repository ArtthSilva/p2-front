const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularAreaEPerimetroDoCirculo(raio) {
    const pi = Math.PI;
    
    const area = pi * raio * raio;

    const perimetro = 2 * pi * raio;

    return { area, perimetro };
}

rl.question("Digite o raio do círculo: ", (raio) => {
  raio = parseFloat(raio);

  const resultado = calcularAreaEPerimetroDoCirculo(raio);

  console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
  console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)}`);

  rl.close();
});
