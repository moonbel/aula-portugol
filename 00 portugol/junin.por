programa {
  funcao inicio() {
    real salario
    inteiro dias
    real salariodiario

    escreva("Digite seu salario: ")
    leia(salario)
    escreva("Quantos dias você trabalhou no mês: ")
    leia(dias)
    salariodiario = salario / dias
    escreva("\nPor dia você recebe R$: " + salariodiario)

    escreva("\ntestando" + salario)
  }
}
