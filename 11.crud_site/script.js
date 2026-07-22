let lista = [];
let indiceEdicao = -1;

function salvar() {
  let produto = document.getElementById('produto').value;
  let preco = document.getElementById('preco').value;
  let marca = document.getElementById('marca').value;
  let onde = document.getElementById('onde').value;

  if (produto == '') {
    alert('Preencha pelo menos o nome do produto!');
    return;
  }

  let item = {
    produto: produto,
    preco: preco,
    marca: marca,
    onde: onde
  };

  if (indiceEdicao == -1) {
    lista.push(item);
  } else {
    lista[indiceEdicao] = item;
    indiceEdicao = -1;
    document.getElementById('btnSalvar').innerText = 'Adicionar';
  }

  limparFormulario();
  mostrarNaTabela();
}

function mostrarNaTabela() {
  let tabela = document.getElementById('tabela');
  tabela.innerHTML = '';

  for (let i = 0; i < lista.length; i++) {
    tabela.innerHTML += `
    <tr>
    <td>${lista[i].produto}</td>
    <td>R$ ${lista[i].preco}</td>
    <td>${lista[i].marca}</td>
    <td>${lista[i].onde}</td>
    <td>
        <button onclick="editar(${i})">Editar</button>
        <button onclick="excluir(${i})">Excluir</button>
        </td>
      </tr>
    `;
  }
}

function editar(i) {
  document.getElementById('produto').value = lista[i].produto;
  document.getElementById('preco').value = lista[i].preco;
  document.getElementById('marca').value = lista[i].marca;
  document.getElementById('onde').value = lista[i].onde;

  indiceEdicao = i;
  document.getElementById('btnSalvar').innerText = 'Atualizar';
}

function excluir(i) {
  lista.splice(i, 1);
  mostrarNaTabela();
}

function limparFormulario() {
  document.getElementById('produto').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('marca').value = '';
  document.getElementById('onde').value = '';
}