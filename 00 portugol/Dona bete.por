programa {
  funcao inicio() {
    real brutoTotal = 6579.00
    real gastouPresentes = 750.00
    real gastouPremiacoes = 112.00
    real totalDelucro = brutoTotal - gastouPremiacoes - gastouPresentes
    real gastosTotais = gastouPremiacoes + gastouPresentes

    escreva("A dona bete teve um bruto total de R$: " + brutoTotal)
    escreva("\nEla gastou: " + gastosTotais)
    escreva("\nO lucro restante de dona bete foi : " + totalDelucro)

  }
}
