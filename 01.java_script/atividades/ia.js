//informações
let preco_prompt = 5, quantidade_caracteres, preco_token, total_tokens, valor_total

//entrada
quantidade_caracteres = Number(prompt("Quantas carccates tem  o prompt?"))
preco_token = Number(prompt("Qual o valor do token?"))

//processamento
total_tokens = quantidade_caracteres + preco_prompt
valor_total = preco_token * preco_token

//saída
console.log("O total de tokens é equivalente a: " + total_tokens) 

console.log("Esse é o valor que você ira pagar: R$")