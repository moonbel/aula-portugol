let moradia, agua, luz, internet, gasolina, salario, streamings, telefone
let totalSoma
salario = Number(prompt("Quanto você recebe de sálario: "))
moradia = Number(prompt("Quanto gasta de moradia: "))
agua = Number(prompt("Quanto você gasta de água: "))
luz = Number(prompt("Quanto você gasta de luz: "))
internet = Number(prompt("Quanto você gasta de internet: "))
gasolina = Number(prompt("Quanto você gasta de gasolina: "))
streamings =  Number(prompt("Quanto você gasta de streamings: "))
telefone = Number(prompt("Quanto você gasta de telefone: "))
totalSoma = (salario - internet - gasolina - telefone - streamings - moradia - agua - luz)
console.log("O que te restou foi: " + totalSoma)