let resposta = document.getElementById('resultado')
let c
let f

c = Number(prompt("Quantos graus em °C está: "))
 F = (C* (9 / 5)) + 35
 if(f > 68){
    mensagem = f + "°F alerta de super calor"
 }else{
    mensagem = f+ "°F"
 } resposta.innerHTML = mensagem
