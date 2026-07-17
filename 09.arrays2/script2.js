const personagens2 = ["Lúcio Fernando","Mônica","Capitão Ganso","Gill Bates","Junin"];

function adicionarPersonagens2(){
     for (let i = 0; i < personagens2.length; i++) {

  document.getElementById("resultado").innerHTML += " "
  document.getElementById("resultado").innerHTML += personagens2[i]
  }
}
function removerCapitao(){
    document.getElementById("resultado").innerHTML = " "
    personagens2.splice(2, 1,);
    adicionarPersonagens2()
}
function removerDois(){
      document.getElementById("resultado").innerHTML = " "
    personagens2.splice(2, 1);
    personagens2.splice(3,1);
    adicionarPersonagens2()
}