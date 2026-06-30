
let idades = [18,20,12,38,88,99]
let precos = []
function array00(){  
          
// let i = 2
//console.log("idade: " + idades(i));

//console.log("idade" + idades(0));
//console.log("idade" + idades(1));
//console.log("idade" + idades(2));
//console.log("idade" + idades(3));
//console.log("idade" + idades(4));
//console.log("idade" + idades(5));
//console.log("idade" + idades(6));
    
//for(let i = 0; i<5; i++){
//console.log("idade: " + idades[i]);
    //}
//}

    for(let i = 0; i<idades.length; i++){
        console.log("idade: " + idades[i]);
    }
}
function  addPrecos(){
    let n = Math.ceil (Math.random() * 100)
precos.push(n)

//console.log(precos);

document.getElementById('lista-precos').innerHTML = ''
for(let i=0; i<precos.length; i++){
  console.log(precos[i]);
  document.getElementById('lista-precos').innerHTML += precos[i] + '-'

  }
}