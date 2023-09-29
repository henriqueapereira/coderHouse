


function solicitarNome(){
  var nome = prompt("Olá, informe o seu nome: ")
  alert("Seja bem vindo " + nome)
}

function mostraIdade(){
  var idade = prompt("Olá, informe o ano do seu nascimento: ")
  alert("Você tem " + (2023 - idade))
}

function calculoIR(){
  var salario = prompt("Informe o seu salario: ")
  if(salario < 1904){
    alert("o seu salario com desconto do IR será: R$ " + salario)
  } else if (salario < 2826){
    alert("o seu salario com desconto do IR será: R$ " + (salario - (salario * 0.075)))
  } else if (salario < 3751){
    alert("o seu salario com desconto do IR será: R$ " + (salario - (salario * 0.15)))
  } else if (salario < 4664){
    alert("o seu salario com desconto do IR será: R$ " + (salario - (salario * 0.225)))
  } else {
    alert("o seu salario com desconto do IR será: R$ " + (salario - (salario * 0.275)))
  }
}



mostraIdade()
solicitarNome()
calculoIR()




