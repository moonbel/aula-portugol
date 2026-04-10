programa {
  funcao inicio() {
    eal celsius
    escreva("Quantos Graus de temperatura tem?(°C): ")
    leia(celsius)
    real fareng = celsius * (9/5) + 32
    se(fareng>=68){
      escreva("TEMPERATURA (°F): " + fareng)
      escreva("\nALERTA DE SUPER CALOR, ABAIXA A TEMPERATURA")
    }
    senao{
      escreva("Temperatura (°F): " + fareng)
      escreva("\nta de boa")
    }
  }
}
