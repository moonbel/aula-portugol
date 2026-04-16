programa {
  funcao inicio() {
    real saldo
    real preco

    escreva("Qual o seu saldo? ")
    leia(saldo)
    escreva("Qual o preço do produto? ")
    leia(preco)
    limpa()

    se(saldo < preco){
      escreva("Você não possui saldo suficiente para comprar esse produto.")
    }
    senao{
      escreva("Compra realizada!")
    }
    }
    }
  }
}
