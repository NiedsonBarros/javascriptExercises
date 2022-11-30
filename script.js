//  12. Faça um script que peça os 3 lados de um triângulo. 
// O script deverá informar se os valores podem ser um triângulo. 
// Indique, caso os lados formem um triângulo, se o mesmo é: 
// quilátero, isósceles ou escaleno.

//     Dicas:
//     Três lados formam um triângulo quando a soma de quaisquer dois lados 
// for maior que o terceiro;
//     Triângulo Equilátero: três lados iguais;
//     Triângulo Isósceles: quaisquer dois lados iguais;
//     Triângulo Escaleno: três lados diferentes;

function calc(){
let ladoA = parseFloat(document.getElementById("ladoA").value);
let ladoB = parseFloat(document.getElementById("ladoB").value); 
let ladoC = parseFloat(document.getElementById("ladoC").value);

if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    return document.getElementById("informacoes").innerHTML = `<h2>É um Triângulo Equilátero</h2>
    <img src="./equilatero.png">`
}

if((ladoA === ladoB && ladoB !== ladoC && ladoA !== ladoC) || 
(ladoA === ladoC && ladoA !== ladoB && ladoB !== ladoC) || 
(ladoB === ladoC && ladoB !== ladoA && ladoA !== ladoC)){
    return document.getElementById("informacoes").innerHTML = `<h2>É um Triângulo Isósceles</h2>
    <img src="isósceles.png">`
}

if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
return document.getElementById("informacoes").innerHTML = `<h2>É um Triângulo Escaleno</h2>
<img src="escaleno.png">`
}

}