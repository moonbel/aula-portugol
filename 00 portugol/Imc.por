programa {
  funcao inicio() {
     real peso
    real altura

    escreva("Qual seu peso? ")
    leia(peso)
    escreva("Qual sua altura? ")
    leia(altura)

    real imc = peso / (altura * altura)

    se(imc < 25){
      escreva("Seu imc é " + imc)
      escreva("\nSeu imc é menor que 25" )
    }
    senao{
      escreva("Seu imc é " + imc)
      escreva("Seu imc é maior que 25")
    }
    }
    }
  }
}
