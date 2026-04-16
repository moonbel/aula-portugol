programa {
  funcao inicio() {
    real combustivel_usado
    real distancia_percorrida

    escreva("Quanto de combustível foi usado? ")
    leia(combustivel_usado)
    escreva("Quanto foi a distância percorrida? ")
    leia(distancia_percorrida)

    real resultado = combustivel_usado / distancia_percorrida

    escreva("A kilometragem por hora foi de: " + resultado)
  }
}
