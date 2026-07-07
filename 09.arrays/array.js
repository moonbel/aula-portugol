let dias = ['segunda ', 'terça ', 'quarta ', 'quinta ', 'sexta ', 'sábado ', 'domingo '];
let numerosPares = [2, 4, 12, 8, 10, 12, 14, 16, 18, 20]

function diasdaSemana() {
    for (let i = 0; i < dias.length; i++) {

document.getElementById("resultado").innerHTML += " "
document.getElementById("resultado").innerHTML += dias[i]
 }
}

function adicionarFeriado() {
document.getElementById("resultado").innerHTML = " "

dias.push('halloween')
diasdaSemana()
}

function removerUltimoDia() {
document.getElementById("resultado").innerHTML = " "

dias.pop()
diasdaSemana()
}

function numerosPare(){
    for (let i = 2; i < numerosPares.length; i++){

document.getElementById("resultado").innerHTML += " "
document.getElementById("resultado").innerHTML += numerosPares[i]
 }
}
