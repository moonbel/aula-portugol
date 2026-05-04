let carne = 0.5, cerveja = 1, agua = 0.5, refri = 0.2
let totalCarne, totalCerveja, totalAgua, totalRefri

produto = Number(prompt("Quantas pessoas são: "))

carne = Number(prompt("Quanto cada um vai levar de carne: "))
totalCarne = produto * carne
console.log("No total de carne de todos vai ser: " + totalCarne + "Kgfit")

cerveja = Number(prompt("Quantos fardos de cerveja cada pessoa vai levar: "))
totalCerveja = produto * cerveja
console.log("\nO total de fardos de cerveja de todos vai ser: " + totalCerveja + "L")

agua = Number(prompt("Quanto cada um vai levar de água: "))
totalAgua = produto * agua
console.log("\nO total de litros de água de todos vai ser: " + totalAgua + "L")

refri = Number(prompt("Quanto cada um vai levar de refrigerante: "))
totalRefri = produto * refri
console.log("\nO total de litros de refrigerante de todos vai ser: " + totalRefri + "L")