let dias = ['segunda ', 'terça ', 'quarta ', 'quinta ', 'sexta ', 'sábado ', 'domingo '];
let numerosPares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let frutas = ['banana', 'maçã', 'uva']
let amigos = ['luanna', 'erick', 'diego']
let idades = ['17', '19', '16', '20', '21', '24']
let alimento = ['Maçãs', 'Pão', 'Leite']
let numeros = ['1', '3', '5', '7', '9']
let pais = ['Paris', 'Londres', 'Nova York']

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

function numerosPare() {
    document.getElementById("resultado").innerHTML = " "

    for (let i = 0; i < numerosPares.length; i++) {

        document.getElementById("resultado").innerHTML += " "
        document.getElementById("resultado").innerHTML += numerosPares[i]
    }
}

function substituirNumeroCeis() {
    document.getElementById("resultado").innerHTML = " "
    numerosPares.splice(2, 1, "12");
    numerosPare()
}
function frutasSequencia() {
    for (let i = 0; i < frutas.length; i++) {

        document.getElementById("resultado").innerHTML += " "
        document.getElementById("resultado").innerHTML += frutas[i]

    }
}

function morango() {
    document.getElementById("resultado").innerHTML = " "
    frutas.push('morango')
    frutasSequencia()

}
function removeMaca() {
    document.getElementById("resultado").innerHTML = " "
    frutas.splice(1, 1,);
    frutasSequencia()
}
function nomesAmigos() {
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById("resultado").innerHTML += " "
        document.getElementById("resultado").innerHTML += amigos[i]
    }
}
function maisAmigos() {
    document.getElementById("resultado").innerHTML = " "
    amigos.push('athos', 'mariom')
    nomesAmigos()
}

function idadeAmigos() {
    for (let i = 0; i < idades.length; i++) {
        document.getElementById("resultado").innerHTML += " "
        document.getElementById("resultado").innerHTML += idades[i]
    }
}

function somaIdades() {
    let soma = Number(idades[0]) + Number(idades[1]);
    document.getElementById("resultado").innerHTML = soma;
}
function media() {
    let soma = 0;

    for (let i = 0; i < idades.length; i++) {
        soma += Number(idades[i]);
    }
    let media = soma / idades.length;
    document.getElementById("resultado").innerHTML = media;
}
function carrinhoCompra() {
        document.getElementById("resultado").innerHTML = " "
    
    for (let i = 0; i < alimento.length; i++) {
        document.getElementById("resultado").innerHTML += " "
        document.getElementById("resultado").innerHTML += alimento[i] 
    }
}
function adicioneMaisComida() {

    document.getElementById("resultado").innerHTML += " "

    alimento.push('ovos', 'arroz')

    carrinhoCompra();
}

function removerTerceiro() {
    document.getElementById("resultado").innerHTML = " "
    alimento.splice(2, 1);
    carrinhoCompra()
}
function verificarPao() {
    document.getElementById("resultado").innerHTML = alimento.includes('Pão');
}

function adicionarImpares() {
       for (let i = 0; i < numeros.length; i++) {
    document.getElementById("resultado").innerHTML += " "
    document.getElementById("resultado").innerHTML += numeros[i] 
    }
}

function multiplicarPorDois() {
    let resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2);
    }

    document.getElementById("resultado").innerHTML = resultado;
}
function cidades() {
    document.getElementById("resultado").innerHTML = "";

    for (let i = 0; i < pais.length; i++) {
        document.getElementById("resultado").innerHTML += pais[i] + " ";
    }
}