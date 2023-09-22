/*
//Controle de Fluxo
var nome = prompt("Inserir nome")
var sobrenome = prompt("Inserir o sobrenome")

//E
if(nome != "" && sobrenome != "")
{
  alert("Nome: " + nome + "\nSobrenome: " + sobrenome)
} else {
  alert("Erro ao inserir nome e sobrenome")
}

//OU
if(nome == "LUCAS" || nome == "Lucas" || nome == "lucas"){
  alert("O nome inserido é Lucas")
} else {
  alert("O nome inserido não é Lucas")
}

//Condições com !
var nome = prompt("Inserir nome")
var eVazio = nome == "" //nome é igual vazio? true se for vazio ou false

if(!eVazio) {
  alert("Nome: " + nome)
} else {
  alert("Nome é vazio;")
}

//RELACIONAL E LÓGICO
var idade = prompt("Inserir idade: ")
if(idade>18){
  alert("É jovem")
} else if (idade >= 18 && idade < 60){
  alert("É aduto")
} else {
  alert("É idoso")
}

var nome = prompt("Digite o nome: ")
if(nome != "" && (nome == "Lucas" || nome == "LUCAS" || nome == "lucas")){
  alert("Olá Lucas")
} else {
  alert("Erro: Inserir nome")
}
*/
//Atividade em sala 
//  receba do usuario uma letra
//  avaliar se o valor informado pelo usuario é vazio
//  verifique se essa letra é uma vogal
//  informe o resultado ao usuario

var letra = prompt('Digite uma letra: ')

if (letra == '') {
  alert('Valor informado é vazio')
} else if (letra == a || letra == e || letra == i || letra == o || letra == u) {
  alert('É vogal')
} else {
  alert('Não é vogal')
}

