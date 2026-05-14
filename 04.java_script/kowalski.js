let relatoriosPf, relatoriosPj, tempoTrabalhadoPf, tempoTrabalhadoPj
let valorPf, valorPj
let somaRelatorios, somaTempo, somaValor
let mediaRelaorioPf, mediaRelaorioPj, mediaTrabalhadoPf, mediaTrabalhadoPj

relatoriosPf = Number(prompt("Quantos relátorios são do pf: "))
relatoriosPj = Number(prompt("Quantos relátorios são do pj: "))

tempoTrabalhadoPf = Number(prompt("Quanto foi o tempo trabalhado pelo pf: "))
tempoTrabalhadoPj = Number(prompt("Quanto foi o tempo trabalhado pelo pj: "))

valorPf = Number(prompt("Qual foi o valor recebido pelo pf: "))
valorPj = Number(prompt("Qual foi o valor recebido pelo pj: "))

somaRelatorios = relatoriosPf + relatoriosPj
somaTempo = tempoTrabalhadoPf + tempoTrabalhadoPj
somaValor = valorPf + valorPj

console.log("A quantidade de relátorios foi de: " + somaRelatorios)
console.log("\nA quantidade de tempo trabalhado foi de: " + somaTempo)
console.log("\nA quantidade de valor recebido foi de: " + somaValor)

mediaRelaorioPf = valorPf / relatoriosPf
mediaRelaorioPj = valorPj / relatoriosPj

mediaTrabalhadoPf = tempoTrabalhadoPf / relatoriosPf
mediaTrabalhadoPj = tempoTrabalhadoPj / relatoriosPj

console.log("A meida do valor recebido por cada relátorios do pf é de: " + mediaRelaorioPf)
console.log("\nA média do valor recebido por cada relátorios do pj é de: " + mediaRelaorioPj)
console.log("\nA média de tempo gasto por relátorio do pf é de: " + mediaTrabalhadoPf)
console.log("\nA média de tempo gasto por relátorio do pj é de: " + mediaTrabalhadoPj)