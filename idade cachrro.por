programa {
  funcao inicio() {
    inteiro cachorro

    escreva("Qual idade do seu cachorro? ")
    leia(cachorro)
    
    inteiro idadehumana = cachorro * 7

    se(idadehumana < 60){
    escreva("Seu cachorro tem " + idadehumana + " e ainda não pode se aposentar")
    }
    senao{
    escreva("Seu cachorro tem " + idadehumana + " e já pode se aposentar")
    }
  }
}
