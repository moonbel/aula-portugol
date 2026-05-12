let resposta = document.getElementById('resultado')
let altura, peso, imc 
let mensagem

peso = Number(prompt("Digite a seu peso: "))
altura = Number(prompt("Digite a sua altura: "))

imc = peso / (altura*altura)

if(imc < 25){
    mensagem = "peso padrão!"
}else if ( imc > 25){
    mensagem = "Você está acima do peso"
}else if ( imc < 18.5){
    mensagem = "Você está abaixo do peso padrão"
}else if( imc  > 30){
    mensagem = "Você está com obsidade :("
} resposta.innerHTML = mensagem


