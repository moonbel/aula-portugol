let nota100 = 100.00
let nota50 = 50.00
let nota20 = 20.00
let nota10 = 10.00
let nota5 = 5.00
let nota2 = 2.00
let nota1 = 1.00
let valor

valor = Number(prompt("Escreva o valor: "))

nota100 = valor / 100
valor = valor % 100

nota50 = valor / 50
valor= valor % 50

nota20 = valor / 20
valor = valor % 20

nota10 = valor / 10
valor = valor % 10

nota5 = valor / 5
valor = valor % 5

nota2 = valor / 2
valor = valor % 2

nota1 = valor / 1
valor = valor % 1


console.log("Notas de 100,00: " + nota100.toFixed(0))
console.log("\nNotas de 50,00: " + nota50.toFixed(0))
console.log("\nNotas de 20,00: " + nota20.toFixed(0))
console.log("\nNotas de 10,00: " + nota10.toFixed(0))
console.log("\nNotas de 5,00: " + nota5.toFixed(0))
console.log("\nNotas de 2,00: " + nota2.toFixed(0))
console.log("\nNotas de 1,00: " + nota1.toFixed(0))






