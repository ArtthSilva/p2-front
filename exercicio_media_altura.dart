import 'dart:io';

void main() {
  int qntHomem = 0;
  int qntMulher = 0;
  var valorAltura;
  String? genero;
  double mediaAltura = 0;
  double menorAltura = double.maxFinite;
  double maiorAltura = double.negativeInfinity;
  double media = 0;

  for (var i = 0; i < 3; i++) {
    print('informe seu genero: ');
    genero = stdin.readLineSync();

    print('informe a sua altura: ');
    valorAltura = stdin.readLineSync();

    double altura = double.tryParse(valorAltura.replaceAll(',', '.')) ?? -1;

    if (genero == 'f' && altura > 0 && !altura.isNaN) {
      qntMulher++;
    } else if (genero == 'm' && altura > 0  && !altura.isNaN) {
      qntHomem++;
      mediaAltura += altura;
    } else {
      return print('genero ou altura informada não é válida');
    }
    if (altura > maiorAltura) {
      maiorAltura = altura;
    }
    if (altura < menorAltura) {
      menorAltura = altura;
    }
    if (qntHomem > 0) {  
    media = mediaAltura / qntHomem;
    }
  }
  print('maior altura: ${maiorAltura.toStringAsFixed(2)}');
  print('menor altura: ${menorAltura.toStringAsFixed(2)}');
  print('qnt mulher: ${qntMulher}');
  print('qnt homem: ${qntHomem}');
  print('media altura homem: ${media.toStringAsFixed(2)}');
}
