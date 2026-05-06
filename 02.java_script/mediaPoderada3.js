//informações
let nota1 = 2, nota2 = 3, nota3 = 5
let resposta_nota1, resposta_nota2, resposta_nota3
let media

//entrada
resposta_nota1 = Number(prompt("Qual o resultado da nota 1?"))
resposta_nota2 = Number(prompt("Qual o resultado da nota 2?"))
resposta_nota3 = Number(prompt("Qual o resultado da nota 3?"))


//processament
media = ((resposta_nota1*nota1) + (resposta_nota2*nota2) + (resposta_nota3*nota3)) / 10

//sída
console.log("A resposta da média é: " + media)