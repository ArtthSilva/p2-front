var populacaoA = 80000;
var populacaoB = 200000;

const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;

var anos = 0;

for (let index = 0; index < anos +1; index++) {
    if (populacaoA < populacaoB) {
        populacaoA = parseInt(populacaoA * (1 + taxaCrescimentoA));
        populacaoB = parseInt(populacaoB * (1 + taxaCrescimentoB));
        anos++;
    }
    console.log(`anos ${anos},  ppopulacao A: ${populacaoA}, populacao B: ${populacaoB}`)
}