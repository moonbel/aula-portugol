let resposta = document.getElementById('resultado')
let lucroObtido, gastoSuprimento, gastosIngressos
let suprimentos, ingressos, gastos

gastoSuprimento = Number(prompt("Quanto foi gasto em suprimentos: "))

gastosIngressos = Number(prompt("Quanto foi gasto em ingressos: "))

suprimentos = Number(prompt("Quanto você arrecadou com os suprimentos: "))

ingressos = Number(prompt("Quanto você arrecadou com os ingressos: "))

gastos = (gastoSuprimento + gastosIngressos)

lucroObtido = (suprimentos + ingressos)

if(suprimentos > ingressos){
    mensagem = "Você faturou mais com os suprimentos"
}else{
    (suprimentos < ingressos)
    mensagem = "Você faturou mais com os ingressos"
} resposta.innerHTML = mensagem

console.log("Os gastos que você obteve foi: " + gastos.toFixed(2))

console.log("O lucro que você teve com as vendas foi de: " + lucroObtido).toFixed(2)