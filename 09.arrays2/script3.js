const personagens = ["Peba","Bilu","Waldisney"];

function adicionarPersonagens3(){
    document.getElementById("resultado").innerHTML = "";

    for (let i =  0; i < personagens.length; i++){
    document.getElementById("resultado").innerHTML += " "
    document.getElementById("resultado").innerHTML += personagens[i]
    }
}
function adicionarMais(){
    document.getElementById("resultado").innerHTML += " "
    personagens.push("Padre ernan buco")
    adicionarPersonagens3()
}
function adicioneInicio(){
    document.getElementById("resultado").innerHTML += " "
    personagens.unshift('GENéZio','Kowalski')
    adicionarPersonagens3()
}
function encontrarPersonagem() {
    let indice = personagens.indexOf("Waldisney");
    document.getElementById("resultado").innerHTML = "Waldisney está no índice: " + indice;
}