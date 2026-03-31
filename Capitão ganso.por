programa {
  funcao inicio() {
    real ordem = 0.1
    real gastos = 8000
    real faturamentoIng = 7500
    real faturamentoIt = 5000
    real faturamentoTotal = faturamentoIng + faturamentoIt
    real lucro = faturamentoTotal - gastos
    real porcentoDelucro = (lucro / gastos) * 100
     escreva("Quantidade gasta em suprimentos e mercadorias R$: " + gastos)
     escreva("\nFaturamento em venda de itens em R$: " + faturamentoIt)
     escreva("\nFaturamento total é de: " + faturamentoTotal)
     escreva("\nNo total do lucro obtido R$: " + lucro)
     escreva("\nNo lucro percentual é de: " + porcentoDelucro)



    
    
    
  }
}
