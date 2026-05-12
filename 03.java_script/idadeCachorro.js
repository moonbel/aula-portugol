let resposta = document.getElementById('resultado')
let idade, idadeHumano
let mensagem
idade = Number(prompt("Qual a idade do seu cachorro: "))
idadeHumano = idade*7

if(idadeHumano >=60){
    mensagem = "Seu cachorro tem " + idadeHumano + " anos e já pode se aposenar!!"
}else{
    mensagem ="Seu cachorro tem " + idadeHumano + " anos e ainda não pode pegar o seguro desemprego"
} resposta.innerHTML = mensagem