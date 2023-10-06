//objetos

/*
let xicara = {
  cor: "branca",
  forma: "redonda",
  peso: 5,
  capacidade: 10
}

console.log(xicara)

let fruta = {
  nome: "Maça",
  cor: "Vermelha",
  peso: 150,
  tipo: "Fruta"
}

console.log(fruta)

fruta.cor = "Amarelo"
fruta.nome = "Banana"

console.log(fruta)

//alterando as props utilizando colchetes
fruta["peso"] = 200
fruta["tipo"] = "Fruta tropical"

console.log(fruta)

*/
//Construtor e New

function Fruta(nome, cor, peso, tipo) {
  this.nome = nome
  this.cor = cor
  this.peso = peso
  this.tipo = tipo
}

const fruta1 = new Fruta('banana', 'amarelo', 5, 'fruta tropical')
//console.log(fruta1)

//Métodos e operações com objetos

console.log('Quantidade de caracteres: ' + fruta1.nome.length)
console.log('Cor da fruta: ' + fruta1.cor.toUpperCase())

for (const propriedade in fruta1) {
  const nomeDaPropriedade = propriedade
  const valor = fruta1[propriedade]

  console.log(nomeDaPropriedade + ' = ' + valor)
}
