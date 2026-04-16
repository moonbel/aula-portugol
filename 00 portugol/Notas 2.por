programa {
  funcao inicio() {
    real notaA
    real notaB

    escreva("Nota A: ")
    leia(notaA)
    escreva("Nota B: ")
    leia(notaB)

    real notaTotal = ((notaA * 3.5) + (notaB * 7.5)) / 11

    escreva("Nota: " + notaTotal)
  }
}
