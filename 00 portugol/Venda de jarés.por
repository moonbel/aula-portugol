programa {
  funcao inicio() {
    inteiro caminhoes
    real lucroPorcaminhao, lucroTotal
    lucroPorcaminhao = (90 * 50) - 450
    //escreva(lucroPorcaminhao)
    escreva("Quantos caminhões: ")
    leia(caminhoes)
    lucroTotal = lucroPorcaminhao * caminhoes
    escreva("Lucro da temporada: " + lucroTotal)  
  }
}
