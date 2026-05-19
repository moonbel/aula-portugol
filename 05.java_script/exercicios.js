//O valor da prestação não pode ultrapassar 30% do salário;
let valorEmprestimo, salario, numeroPrestacao
let somaValor, total

salario = Number(prompt("Qual o seu salário: "))
valorEmprestimo = Number(prompt("Qual o valor do emprestimo: "))
numeroPrestacao = Number(prompt('Qual o número de prestações: '))

somaValor = salario + valorEmprestimo
total = (somaValor / numeroPrestacao) * 100

console.log("Esse é ")