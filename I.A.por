programa {
  funcao inicio() {
  real prompt, caracters
  real precoDeToken = 5
  real precoDeCaracter = 1
  

  escreva("Quantos prompt gostaria de mandar? ")

  leia(prompt)

  real totalPrompt = precoDeToken * prompt

  escreva("Quantos caracters ira ter para cada prompt? ")

  leia(caracters)

  real totalCaracter = (precoDeCaracter * caracters)

  real totalToken = (totalCaracter * prompt) + totalPrompt

  real custoDinheiro = totalToken * 0.150

  escreva("Esse é o custo em tokens: " + totalToken)
  
  escreva("\nesse é o preco que você ira pagar: R$" + custoDinheiro)


    
}


}
