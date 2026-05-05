let quantidadePeca1, quantidadePeca2, precoUnitario1, precoUnitario2, valorQuantidade, valorUnitario,  total

quantidadePeca1 = Number(prompt("Quantas peças são do estoque 1: "))

quantidadePeca2 = Number(prompt("Quantas peças são do setor 2: "))

precoUnitario1 = Number(prompt("Qual o valor das peças do setor 1: "))

precoUnitario2 = Number(prompt("Qual o valor das peças do setor 2: "))

valorQuantidade = quantidadePeca1 + quantidadePeca2

valorUnitario = precoUnitario1 + precoUnitario2

console.log("A quantidade de produtos dos setores no total é: " + valorQuantidade)

console.log("\nO preço a ser pago pelos produtos no total é: " + valorUnitario)

