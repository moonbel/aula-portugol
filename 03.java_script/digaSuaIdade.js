let resposta = document.getElementById('resultado')

let idade
let mensagem

idade = Number(prompt("Qual a sua idade: "))

if(idade >= 18){
mensagem = "Maior de idade muito bem ;)"
}else{
    (idade < 18)
    mensagem = "Menor de idade >:("
} resposta.innerHTML = mensagem

