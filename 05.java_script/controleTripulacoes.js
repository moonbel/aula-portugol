let resposta = document.getElementById('resultado')
let mensagem
let quantidadeMarujos, minimoComida

quantidadeMarujos = Number(prompt("Quantos márujos estão cruzando o mar com você: "))
minimoComida = Number(prompt("Quantos kilos de carne você está levando com vocês: "))

if(quantidadeMarujos >= 10 && minimoComida >= 1.5){
    mensagem = "Provisões suficientes. Rumo ao horizonte"
}else{
    mensagem = "Algo está errado. Posseidom não quer ninguém no mar hoje"
} resposta.innerHTML = mensagem

