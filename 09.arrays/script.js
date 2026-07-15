const personagens = ["Rivaldo Jesus", "Kowalski", "Genezio", "Waltdisney"];

const seletor = document.getElementById("seletor")

for (i = 0; i < personagens.length; i++) {

    document.getElementById("lista").innerHTML += personagens[i] + "<br>"
    // let sel = document.getElementById("opc").textContent += personagens[i]
    // console.log(sel)

    const opt = document.createElement("option");

    opt.id = personagens[i]
    opt.value = personagens[i];
    opt.textContent = personagens[i];

    seletor.appendChild(opt)

    //  document.getElementById("listadados").innerHTML += numeroAleatorio + "<br>"
    // document.getElementById("seletor"). += opt.value
    console.log(seletor)
    // seletor.appendChild(opt);
}

function buscarIndice() {

    let escolhaDoPersonagem = document.getElementById("seletor").value
    let indiceDoPersonagem = personagens.indexOf(escolhaDoPersonagem)

    if (indiceDoPersonagem != -1) {

        document.getElementById("texto-p").innerHTML = escolhaDoPersonagem + " está no indice " + indiceDoPersonagem

    }

    else {

        document.getElementById("texto-p").innerHTML = "Esse personagem não existe!"

    }
}

function adicionarPersonagens() {

    document.getElementById("lista").innerHTML = " "

    let adicionandoPersonagem = document.getElementById("adic").value

    if (adicionandoPersonagem != "") {

        personagens.push(adicionandoPersonagem)

        const opt = document.createElement("option");

        opt.id = adicionandoPersonagem
        opt.value = adicionandoPersonagem;
        opt.textContent = adicionandoPersonagem;
        seletor.appendChild(opt)
        console.log(opt)

        document.getElementById("texto-p").innerHTML = ""

    }

    else {

        document.getElementById("texto-p").innerHTML = "Escreva um personagem!"

    }

    for (i = 0; i < personagens.length; i++) {

        document.getElementById("lista").innerHTML += personagens[i] + "<br>"
        console.log(seletor)

    }
}

function removerPersonagem() {

    document.getElementById("lista").innerHTML = " "

    let qualPersonagem = document.getElementById("seletor").value
    let removendoPersonagem = personagens.indexOf(qualPersonagem)

    if (removendoPersonagem != -1) {

        personagens.splice(removendoPersonagem, 1)

        const elementoRemovido = document.getElementById(qualPersonagem)

        elementoRemovido.remove()

        document.getElementById("texto-p").innerHTML = ""

    }

    else {

        document.getElementById("texto-p").innerHTML = "Não tem nenhum persongem no momento"

    }

    for (i = 0; i < personagens.length; i++) {

        document.getElementById("lista").innerHTML += personagens[i] + "<br>"

    }

}

function verificarPersonagens() {

    let verificacao = document.getElementById("adic").value
    let tf = personagens.includes(verificacao)
    if (tf == true) {
        document.getElementById("texto-p").innerHTML = verificacao + " está na lista"
        console.log(tf)
    }
    else {
        document.getElementById("texto-p").innerHTML = verificacao + " Não está na lista"
        console.log(tf)
    }
}

function inverterPersonagens(){
    document.getElementById("lista").innerHTML = ""
    const a = personagens.reverse()
    document.getElementById("seletor").textContent =""
    console.log(a)
    for (i = 0; i < personagens.length; i++) {
    
    const opt = document.createElement("option");

    opt.id = personagens[i]
    opt.value = personagens[i];
    opt.textContent = personagens[i];

    seletor.appendChild(opt)
    
    document.getElementById("lista").innerHTML += personagens[i] + "<br>"

    }
}