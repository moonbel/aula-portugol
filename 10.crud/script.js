//C >> create >> cadastrar 
//R >> read >> ler
//U >> update >> alterar/atualizar/editar/fuçar/mudar
//D >> delete >> apagar/deletar/excluir/aniquilar

//ctrl + ;

//const nomes = []

//const altura = []

// let dino = {
//     nome:  "testessauro", 
//     altura: 3,
//     cor: "marrom sei lá",
//     custo: 14
// }

// console.log(dino);

const dinos = []
function cadastrarDino(){
    const novoDino = {
    id: Date.now(),
    nome: document.getElementById('input-nome').value,
    altura: Number(document.getElementById('input-altura').value),
    cor: document.getElementById('input-cor').value,
    custo: Number(document.getElementById('input-custo').value),
    }
    dinos.push(novoDino)
    console.log(dinos); 

    limparFormulario()
    function limparFormulario(){
    nome: document.getElementById('input-nome').value = ' '
    altura: document.getElementById('input-altura').value = ' '
    cor: document.getElementById('input-cor').value = ' '
    custo: document.getElementById('input-custo').value = ' '
        
    nome: document.getElementById('input-nome').focus()
  }
}
function testar(){
  const novoDino = {
    nome:  prompt("nome"), 
    altura: 3,
    cor: "marrom sei lá",
    custo: 14
 }
    dinos.push(novoDino)
    console.log(dinos);
}
function mostrarTodos(){
    alert("todos")
}

