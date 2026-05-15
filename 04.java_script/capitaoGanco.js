let gastos, ingressos, lucro, itens, valorTotal, percentual

gastos = Number(prompt("Quanto você gastou com gastos em geral: "))
ingressos = Number(prompt("Quanto você faturou com ingressos: "))
itens = Number(prompt("Quanto você faturou com itens: "))

lucro = (ingressos + itens) - gastos
valorTotal = (ingressos + itens)
percentual = (lucro / gastos) * 100 

console.log("O lucro que você obteve foi de: " + lucro.toFixed(2))
console.log("\nEsse foi o lucro percentual que você obteve: %" + percentual.toFixed(2))