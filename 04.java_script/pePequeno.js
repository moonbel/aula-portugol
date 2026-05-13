let resposta = document.getElementById('resultado')
let preco, quantidade, valeTroca
let mensagem

preco = Number(prompt("Quanto custa um par de sapato: "))
quantidade = Number(prompt("Quantos pares de calçados foram trocados: "))

if(quantidade <= 100){
    mensagem = "Tudo em ordem "
}else{
    (quantidade > 100)
    mensagem = "Entre em contato com a fábrica, algo errado"
} resposta.innerHTML = mensagem

valeTroca = (preco * quantidade)

console.log("Quanto a empreta vai receber em vale troca é: R$" + valeTroca.toFixed(2))