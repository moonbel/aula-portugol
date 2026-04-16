programa {
  funcao inicio() {
    //informações

    real valorTotal, valorDiaria, descoto10
    real desconto15, multa = 150, valorBruto
    inteiro dias

    //entradas

    escreva("Quantos dias? ")
    leia(dias)

    //processamento
    se(dias <=5){
      valorDiaria = 100
    }senao se(dias>= 6 e dias <= 10){
      valorDiaria = 90

    }senao{  
    valorDiaria = 80
    }

    valorBruto = dias * valorDiaria
    descoto10 = valorBruto * 0.1
    desconto15 = valorBruto * 0.15
    valorTotal = valorBruto - descoto10 - desconto15 + multa

    //saídas
  escreva("\n =================\n")
  escreva("Valor brutoR$: " + valorBruto)
  escreva("\nDeesconto 1: R$" + descoto10)
  escreva("\nDesconto 2: R$" + desconto15)
  escreva("\nMulta: R$" + multa)
  escreva("\n===============\n")
  escreva("Total a pagar: R$" + valorTotal) 
  }
}
