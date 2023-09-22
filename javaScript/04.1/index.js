//Funções
//Declaração
//function saudacao(){
//  console.log("Olá")
//}

// function solicitarNome(){
//   var nome = prompt("Inserir nome")
//   alert("O nome inserido é " + nome)
// }

// solicitarNome()
// solicitarNome()

//Para praticar
/*Crie um função que:
  receba um número do usuario
  verifique se esse número é par
  exiba um alert com o resultado
*/

// function verificarPar(){
//   var numero = prompt("Insira um número")
//   if(numero % 2 == 0){
//     alert("É par")
//   } else {
//     alert("É impar")
//   }
// }

// verificarPar();

//Argumento e Parametro
//Declaração de variavel para armazenar o resultado da soma
// var resultado = 0

// function somar(primeiroNumero, segundoNumero){
//   resultado = primeiroNumero + segundoNumero
// }

// function mostrar(mensagem){
//   alert(mensagem)
// }

// //chamamos primeiro para somar e depois para mostar
// somar(6,3)
// mostrar(resultado)

//Calculadora
// function calculadora(primeiroNumero, segundoNumero, operacao){
//   if(operacao == "+"){
//   return primeiroNumero + segundoNumero}

//   if(operacao == "-"){
//   return primeiroNumero - segundoNumero}

//   if(operacao == "*"){
//   return primeiroNumero * segundoNumero}

//   if(operacao == "/"){
//   return primeiroNumero / segundoNumero}

//   else{
//     return 0;}
  
// }

// var resultadoCalculadora = calculadora(30,10,"-")
// alert(resultadoCalculadora)
// //ou
// alert(calculadora(30,10,"+"))

//Para praticar
/* crie uma função
    receba dois números
    verifique qual é o número maior
    faça uma subtração do maior pelo menor
    exibia o resultado no console
*/

function calcular(numero1, numero2){
  if(numero1 > numero2){
    return numero1 - numero2
  } else {
    return numero2 - numero1
  }

  alert(calcular(5,1))
}