//informações


let bombas = 7, bombas_total, show, preco_bomba, preco_total

//entrada
show = Number(prompt("Quantidade de shows marcados: "))

preco_bomba = Number(prompt("Valor bomba: "))

//processamento
bombas_total = bombas * show

preco_total = preco_bomba * bombas_total

//saída
console.log("Quanidade de bombas necesssárias " + bombas_total)

console.log("\no custo da bomba é: R$" + preco_total)