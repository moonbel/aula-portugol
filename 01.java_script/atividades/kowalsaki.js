let relatoriosPj, relatoriosPf
let tempoRelatoriosPf, tempoRelatoriosPj
let valorRecebidoPf, valorRecebidoPj
let valorRelatorio, somaTempo, relatorioRecebidos
relatoriosPf = Number(prompt("Quantos relátorios são para o pf: "))
relatoriosPj = Number(prompt("Quantos relátorios são para o pj: "))

tempoRelatoriosPf = Number(prompt("Quanto tempo o pf trabalhou: "))
tempoRelatoriosPj = Number(prompt("Quanto tempo o pj trabalhou: "))

valorRecebidoPf = Number(prompt("Qual foi o valor que o pf recebeu: "))
valorRecebidoPj = Number(prompt("Qual foi o valor recebido pelo pj: "))

relatorioRecebidos = relatoriosPf + relatoriosPj
somaTempo = tempoRelatoriosPf + tempoRelatoriosPj
valorRelatorio = valorRecebidoPf + valorRecebidoPj

console.log("O total de relárotios recebido foi: " + relatorioRecebidos)
console.log("\nO total de tempo trabalhado foi: " + somaTempo)
console.log("O valor recebido no total foi: " + valorRelatorio)