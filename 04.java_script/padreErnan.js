let resposta = document.getElementById('resultado')
let mensagem
let custosMensais, doacoes, quantoFalta
custosMensais = Number(prompt("Quanto é o custo mensal da igreja: "))
doacoes = Number(prompt("Quanto foi recebido de doações no dia: "))

quantoFalta = custosMensais - doacoes

if(doacoes >= custosMensais){
    mensagem = "Ai sim, a meta já foi obtida"
}else{
    (doacoes < custosMensais)
    mensagem = "Ah não a meta ainda não foi obtida, ainda falta " + quantoFalta  + " para atingir a cota"
} resposta.innerHTML = mensagem