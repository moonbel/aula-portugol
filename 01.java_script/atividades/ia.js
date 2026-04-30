let toke, prompts, caracter
let precoToken = 5, precoCaracter = 1
let totalToken, totalCaracter, custoDinheiro

prompts = (prompts - 5)

prompts = Number(prompt("Quantos prompt  vão ser enviados: "))

caracter = (caracter - 1)

caracter = Number(prompt("Quantos caracters vão ser enviados"))

totalCaracter = (precoCaracter*caracter)
totalToken = (totalToken*prompts) + totalToken

custoDinheiro = totalToken * 0.150

console.log("Esee é o preço em tokens: " + totalToken)
console.log("\nEsse é o preço que você ira pagar: R$" + custoDinheiro)












