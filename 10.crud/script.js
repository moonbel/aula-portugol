

let dinos = []

function adicionardinos() {
    carregarDados()
    let novoDino = {
        id: Date.now(),
        nome: document.getElementById("input-nome").value,
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value)
    }

    dinos.push(novoDino)
    console.log(dinos)
    salvarDados()
    limparFormulario()
    mostrardinos()
    
}
function limparFormulario() {
    document.getElementById("input-nome").value = ""
    document.getElementById("input-altura").value = ""
    document.getElementById("input-cor").value = ""
    document.getElementById("input-custo").value = ""
    document.getElementById("input-id").value = ""

    document.getElementById("input-nome").focus()
}
function mostrardinos() {
    carregarDados()
    document.getElementById("m-d").innerHTML = ""

    for (i = 0; i < dinos.length; i++) {

        document.getElementById("m-d").innerHTML += "id: " + dinos[i].id + "<br>"
        document.getElementById("m-d").innerHTML += "Nome: " + dinos[i].nome + "<br>"
        document.getElementById("m-d").innerHTML += "Altura: " + dinos[i].altura + "<br>"
        document.getElementById("m-d").innerHTML += "Cor: " + dinos[i].cor + "<br>"
        document.getElementById("m-d").innerHTML += "Custo: " + dinos[i].custo + "<br>"

    }
}
function removerdino() {
    carregarDados()
    let remove = document.getElementById("input-nome").value
    for (i = 0; i < dinos.length; i++) {
        if (remove == dinos[i].nome) {
            dinos.splice(i, 1)
        }
    }
    salvarDados()
    limparFormulario()
    mostrardinos()
    
}

function altdino() {
    carregarDados()
    let troca = document.getElementById("input-id").value
    let alterar = document.getElementById("input-nome").value
    let alterar2 = Number(document.getElementById("input-altura").value)
    let alterar3 = document.getElementById("input-cor").value
    let alterar4 = Number(document.getElementById("input-custo").value)
    for (i = 0; i < dinos.length; i++) {
        if (troca == dinos[i].id) {
            if (alterar != "") {
                dinos[i].nome = alterar
            }
            if (alterar2 != "") {
                dinos[i].altura = alterar2
            }
            if (alterar3 != "") {
                dinos[i].cor = alterar3
            }
            if (alterar4 != "")
                dinos[i].custo = alterar4
        }

    }
    salvarDados()
    limparFormulario()
    mostrardinos()
    
}
function procurarDino() {
    carregarDados()
    let procuraDino = document.getElementById("input-nome").value

    for (i = 0; i < dinos.length; i++) {
        if (procuraDino == dinos[i].nome) {
            document.getElementById("input-id").value = dinos[i].id
            document.getElementById("input-nome").value = dinos[i].nome
            document.getElementById("input-altura").value = dinos[i].altura
            document.getElementById("input-cor").value = dinos[i].cor
            document.getElementById("input-custo").value = dinos[i].custo
        }
    }
    mostrardinos()
}
function salvarDados() {
    localStorage.setItem("dinos", JSON.stringify(dinos))
}
function carregarDados() {
    dinos = JSON.parse(localStorage.getItem("dinos"))
}