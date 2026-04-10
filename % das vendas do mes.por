programa {
  funcao inicio() {
      cadeia nome
    real salarioF
    real ventasDmes

    escreva("Nome do usuario: ")
    leia(nome)
    escreva("Salario Fixo: R$")
    leia(salarioF)
    escreva("Ventas do Mes em Dinheiro: R$")
    leia(ventasDmes)
real totalsalario = (ventasDmes * 0.15) + salarioF
escreva("Salario total: R$" + totalsalario)
  }
}
