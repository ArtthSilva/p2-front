

function salarioAtual(salario){
    let ano = 1995;
    let valorSalario = salario;
    let taxa = 1.5;

    for(let i = ano; i <= 2023; i++){
       
        valorSalario = valorSalario + (valorSalario * taxa)/100;
        if(i >= 1997){
            taxa = taxa * 2;
        }
       
        console.log(taxa);
        console.log(valorSalario);
    }
    console.log(valorSalario);
}
salarioAtual(1000);