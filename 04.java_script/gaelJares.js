let precoJares = 90.00, precoCaminhoes = 450.00, precoQuantidade = 50
let quantidadeCaminhao, quantidadeJare
let somaJare, somaCaminhao, somaQuantidade, total

quantidadeCaminhao = Number(prompt("Quantos caminhões estão sendo transportados: "))

quantidadeJare = Number(prompt("Quantos jarés estão sendo levado em cada caminhão: "))

somaCaminhao = (precoCaminhoes * quantidadeCaminhao)

somaJare = (precoJares * quantidadeJare)

console.log("O faturamento de caminhões que você teve hoje foi de: R$" + somaCaminhao.toFixed(2))

console.log("\nO custo que você teve com os jarés foi de: " + somaJare.toFixed(2))

total = (somaCaminhao + somaJare)
console.log("\nO lucro que você teve no otal foi de: " + total.toFixed(2))




