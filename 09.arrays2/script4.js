let personagens = ["Peba","Bilu","Waldisney","GENéZio"];

function adicionarPersonagens4(){
     for (let i = 0; i < personagens.length; i++){
  document.getElementById("resultado").innerHTML += " "
  document.getElementById("resultado").innerHTML += personagens[i] 
}
}