
function rodarWhile(){
let i = 0 // 1o pilar
while(i<50){ //2o pilar

console.log(i);
i++ // 3o pilar
    }
}

function rodarFor(){

for(let i=0; i<40; i++ ){

console.log(i);
    }
}

function rodarWhile(){
let i = 0 
do{ 
  console.log(i);
  i++
}while(i <= 50);

}

function exemploWhile(){
    let idade = 0
   do{
    idade = Number(prompt("Digite sua idade: "))
   }while (idade < 18)
    alert("entrou no sistema")
   
}

function exemploDowhileilimitado(){
    let idade
    let tentativas = 3
    do{ 
        idade = Number(prompt("Digite sua idade: "))
        tentativas--
        console.log(tentativas);
    
    }while (idade < 3 && tentativas > 0)
        alert("Você entrou no sistema")
}
