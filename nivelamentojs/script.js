document.addEventListener("DOMContentLoaded", function () {
    var quantidadeMulher = 0;
    var AlturaMediaHomens = 0.0;
    var quantidadeHomens = 0;
    var maiorAltura = Number.NEGATIVE_INFINITY;
    var menorAltura = Number.POSITIVE_INFINITY;
    var i = 0;

    document.getElementById("proximoButton").addEventListener("click", function () {
        if (i < 1) {
            var sexoI = document.getElementById("sexo").value;
            var sexo = sexoI.toLowerCase();
            var altura = parseFloat(document.getElementById("altura").value);

            if (sexo === "feminino") {
                quantidadeMulher++;
            } else if (sexo === "masculino") {
                quantidadeHomens++;
                AlturaMediaHomens += altura;
            }

            if (altura > maiorAltura) {
                maiorAltura = altura;
            }
            if (altura < menorAltura) {
                menorAltura = altura;
            }

            document.getElementById("sexo").value = " ";
            document.getElementById("altura").value = " ";

            i++;
        } else {
            AlturaMediaHomens = AlturaMediaHomens / quantidadeHomens;
            document.getElementById("qntM").textContent = "Quantidade de mulheres: "+quantidadeMulher;
            document.getElementById("maiorAltura").textContent = "Maior altura " + maiorAltura;
            document.getElementById("menorAltura").textContent = "Menor altura "+menorAltura;
            document.getElementById("alturaMediaHomens").textContent ="Altura media dos homens " + AlturaMediaHomens;
        }
    });
});