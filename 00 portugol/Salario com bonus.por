programa {
  funcao inicio() {
    real salarioVendedor
    real valorVenidoPorEle 

    escreva("Qual o salario do vendedor? ")
    leia(salarioVendedor)

    escreva("Qual o valor de vendas? ")
    leia(valorVenidoPorEle)

    real salario = salarioVendedor * valorVenidoPorEle

    escreva("\nEsse é o valor com o  bonus das vendas: " + salario)
  }
}
