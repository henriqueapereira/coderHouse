/*
Ciclos e iterações

FOR
for(inicio; condicao; atualização){
  //o que está escrito aqui será executado enquanto durar o loop
}
*/
//conta 1 a 10
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

//tabuada
/*console.log("TABUADA")

let numero = parseInt(prompt("Insira um número"))

for(let i = 1; i <=10; i++){
  let resultado = numero * i
  console.log(numero + " X " + i + " = " + resultado)
}*/

/*
let numero = parseInt(prompt("Inserir Número"))

function produtorio(numero) {
  let resultado = 1;
  for(let i = 1; i <= numero; i++) {
    resultado = resultado * i;
  }
  console.log("Produtorio de " + numero + " = " + resultado)

}

produtorio(numero)
*/

//pratica em sala
/*console.log("Pratica em sala")
let numeroMenor = parseInt(prompt("Inserir um número: "))

exibirNumeroMenor(numeroMenor)
function exibirNumeroMenor(numero){
  if(numero < 1 || numero > 10)
  {
    console.log("Numero fora do intervalo de 1 a 10")
    return
  }

  for(let i = 1; i < numero; i++) {
    console.log(i)
  }
}
*/
//while
//Algoritmo que solicita uma entrada e executa até solicitar para sair

/*let entrada = prompt("Inserir um dado")
while(entrada != "sair") {
  alert("O usuario inseriu " + entrada)

  entrada = prompt("Inserir um dado")
}*/

//receba um numero e calcular seu fatorial

function calcularFatorial(numero) {
  if(numero < 0) {
    return "Número negativo não possui fatorial!"
  }

  if(numero == 0 || numero ==1){
    return 1
  } 
  else{
    let resultado = 1;
    let i = 2;
    
    while(i <= numero) {
      resultado = resultado * i
      i++
    }
    return resultado
  }
}
console.log(calcularFatorial(3))



