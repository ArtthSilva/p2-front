import 'dart:io';

void main() {
  var primeiraNota;
  var segundaNota;
  var terceiraNota;

  print('informe a primeira nota: ');
  primeiraNota = stdin.readLineSync();
  print('informe a segunda nota: ');
  segundaNota = stdin.readLineSync();
  print('informe a terceira nota: ');
  terceiraNota = stdin.readLineSync();

  double nota1 = double.tryParse(primeiraNota.replaceAll(',', '.')) ?? -1;
  double nota2 = double.tryParse(segundaNota.replaceAll(',', '.')) ?? -1;
  double nota3 = double.tryParse(terceiraNota.replaceAll(',', '.')) ?? -1;

    if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
    print('alguma das notas não são válidas');
    return;
  }

  double media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5);
  print('A média calculada é: $media');
}

