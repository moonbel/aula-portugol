programa {
  funcao inicio() {
    inteiro bombas = 7, shows
    real precoBombas = 45.00
    real ingressos = 100.00

    escreva("Quantidade de shows marcados: ")
    leia(shows)

    inteiro totalDebombas = bombas*shows

    escreva("\nQuantidade de bombas necessarias: " + totalDebombas)

    escreva("\nIngressos vendidos: ")
    leia(ingressos)
    real custoTotal = totalDebombas * precoBombas
    escreva("O custo de bombas é R$: " + custoTotal)
  }
}
