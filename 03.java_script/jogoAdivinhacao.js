let resposta = document.getElementById('resultado')
let saldo, preco
let mensagem

saldo = Number(prompt("Qual seu saldo: "))
preco = Number(prompt("Qual o valor do produto: "))

if(saldo >= preco){
    mensagem = "Compra realizada! cartão passado"
}else{
    (saldo < preco)
    mensagem = "Compra negada, saldo insuficiente"
} resposta.innerHTML = mensagem
