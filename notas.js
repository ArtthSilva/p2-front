const readline = require('readline');

class Aluno {
    notas = [];

    increment(valor) {
        if (valor >= 0 && valor < 11) {
            this.notas.push(valor);
        } else {
            console.log('Nota não válida');
        }
    }

    media() {
        if (this.notas.length === 3) {
            const soma = this.notas.reduce(function (proxNota, atualNota) {
                return proxNota + atualNota;
            });
            return soma / 3;
        }
        return null; 
    }

    status() {
        const m = this.media();
        if (m === null) {
            return 'Faltam notas para calcular a média.';
        } else if (m < 4) {
            return 'Reprovado';
        } else if (m < 7) {
            return 'Recuperação';
        } else {
            return 'Aprovado';
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const aluno = new Aluno();

function pedirNota() {
    rl.question('Digite uma nota (0-10): ', function (input) {
        const nota = parseFloat(input);
        aluno.increment(nota);

        if (aluno.notas.length < 3) {
            pedirNota();
        } else {
            const status = aluno.status();
            if (status === 'Recuperação') {
                rl.question('Digite a nota da recuperação: ', function (recuperacao) {
                    const notaRecuperacao = parseFloat(recuperacao);
                    const novaMedia = (aluno.media() + notaRecuperacao) / 2;
                    if (novaMedia >= 5) {
                        console.log('Aprovado');
                    } else {
                        console.log('Reprovado');
                    }
                    rl.close();
                });
            } else {
                console.log(status);
                rl.close();
            }
        }
    });
}

pedirNota();
