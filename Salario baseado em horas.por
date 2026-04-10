programa {
  funcao inicio() {
    real horasTrabalhadas
    real valorPorHoraTrabalhada

    escreva("Quantas horas foi trabalhadas? ")
    leia(horasTrabalhadas)

    escreva("Qual o valor o funcionario recebe por hora trabalhada? ")
    leia(valorPorHoraTrabalhada)

    real total = horasTrabalhadas * valorPorHoraTrabalhada

    escreva("\nO valor que o funcionario vai receber é: " + total)


  }
}
