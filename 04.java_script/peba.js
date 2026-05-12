let resposta = document.getElementById('resultado')
let vitorias, empates, bonus, soma, pontos
let mensagem
vitorias = Number(prompt("Quantas vitórias seu time fez: "))
empates = Number(prompt("Quantos empates teve com o time adversario: "))

bonus = (vitorias * 3)
soma = (empates * 1)
pontos = bonus + soma
if(vitorias >= 70){
    mensagem = "Parabéns você é um candidato ao título"
}else{
    (vitorias < 70)
    mensagem = "Sinto muito você não é um candidato ao título"
} resposta.innerHTML = mensagem
console.log("Os pontos esperados de vitórias é: " + pontos)