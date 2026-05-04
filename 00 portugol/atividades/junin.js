//infos

let salario, dias, salarioDias

//entradas

salario = Number(prompt("Sálario: "))
dias = Number(prompt("Dias trabalhados: "))

//processamentos

salarioDias = salario / dias

//saidas

alert("Sálario por dia: R$" + salarioDias.toFixed(2))