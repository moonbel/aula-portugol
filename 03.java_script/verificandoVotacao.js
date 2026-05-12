let resposta = document.getElementById('resultado')
let mensagem
let idade
idade = Number(prompt("Qual a sua idade: "))
 
if(idade >= 16){
    mensagem = "Idade suficiente para votar, boa eleição"
}else{
    (idade < 16)
    mensagem = "Idade não atiginda para votar, que pena"
} resposta.innerHTML = mensagem