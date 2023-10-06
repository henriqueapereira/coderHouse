//simular um empréstimo

let valor = parseInt(prompt("Informe o valor desejado"))
let parcelas = parseInt(prompt("Informe as parcelas desejadas, (12, 24, 36 ou 48)"))


function simulaEmprestimo(valor, parcelas){
  let valorPago = 0
  let valorPagar = valor + 1000
  //let valorParcelas = valorPagar / parcelas

  for(let i=parcelas; i < 0; i--){
    let valorParcelas = valorPagar / i;
    console.log(valorParcelas)
    
  }
}

simulaEmprestimo(valor, parcelas)