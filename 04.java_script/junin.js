let bicos, rendaMes, total, valorArrecadado

bicos = Number(prompt("Quantos bicos o junin fez no mês: "))

rendaMes = Number(prompt("Quanto ele fatura por mês fazendo os bicos: "))

total = (rendaMes * bicos)
valorArrecadado = total % rendaMes

console.log("O valor arrecadado pelos freelas do junin é: " + total)