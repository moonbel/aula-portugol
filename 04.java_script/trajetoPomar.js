let resposta = document.getElementById('resultado')
let mensagem
let laranjaInicial, laranjaFinal, somaTotal

laranjaInicial = Number(prompt("Qual é a quantidade inicial de laranjas: "))
laranjaFinal = Number(prompt("Quanto lhe restou de laranjas no final da feira: "))

somaTotal = laranjaInicial - laranjaFinal

if(somaTotal > 0){ 
    mensagem = "Tudo certo, sobrou para o proximo dia"

 }else{
     mensagem = "O estoque deve ser maior na proxima feira"
 }  resposta.innerHTML = mensagem
 console.log("O total de laranjas que sobrou da feira de hoje foi: " + somaTotal)