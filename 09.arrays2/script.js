const personagens = ['Lúcio fernando','Mônica','Capitão ganso']

function adicionarPersonagens(){
  for (let i = 0; i < personagens.length; i++) {

  document.getElementById("resultado").innerHTML += " "
  document.getElementById("resultado").innerHTML += personagens[i]
  }
}
function adicionarGill(){
    document.getElementById("resultado").innerHTML = " "

    personagens.push('Gill bates')
    adicionarPersonagens()
}
function donaBete(){
    document.getElementById("resultado").innerHTML = " "
    personagens.unshift('Dona bete');
    adicionarPersonagens()
}
function removerGill(){
    document.getElementById("resultado").innerHTML = " "
    personagens.splice(4, 1,);
    adicionarPersonagens()
}
function removerDonaBete(){
     document.getElementById("resultado").innerHTML = " "
    personagens.splice(0, 1,);
    adicionarPersonagens()
}

