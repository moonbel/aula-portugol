let resposta = document.getElementById('resultado')
let salario, emprestimo, prestacoes, valorPrestacao, soma,
limite, somaTotal
let mensagem

salario = Number(prompt("Quanto é o seu salario: "))
emprestimo = Number(prompt("Quanto você quer de emprestimo: "))
prestacoes = Number(prompt("e quantas prestacoes são: "))

soma = emprestimo / prestacoes
somaTotal = limite - salario * 0.30

if (salario == 0 && emprestimo == 0 && prestacoes == 0) {

mensagem = "Todos os valores devem ser maiores que zero "

}else if (prestacoes >= soma) {

mensagem = "Empréstimo aprovado " +  valorPrestacao.toFixed(2)

}else{ 

mensagem = "Empréstimo negado " + prestacoes.toFixed(2)

} resposta.innerHTML = mensagem