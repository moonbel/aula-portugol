let horasTrabalhadas, valorPorHoraTrabalhada, numeroFuncionario
let total

numeroFuncionario = Number(prompt("Qual o número do funcionario?"))
horasTrabalhadas = Number(prompt("Quantas horas foram trabalhadas: "))
valorPorHoraTrabalhada = Number(prompt("Qual o valor o funcionário recebe por hora trabalhada: "))

total = horasTrabalhadas * valorPorHoraTrabalhada

console.log("O número do funcionário é:" + numeroFuncionario)
console.log("\nA quantidade de horas trabalhadas é:" + horasTrabalhadas)
console.log("\nO valor que o funcionário vai receber por hora é: R$" + total.toFixed(2))