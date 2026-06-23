let i = 0
function exercicio1(){
let contador = 0
while(contador < 10){
    contador++
    alert("Ao quadrado: " + contador)
    i = contador * contador
    alert(i)
}
}

function exercicio2(){
let contador = 11
while(contador > 0){
    contador--
    alert("Valor: " + contador)
}
}

function exercicio3(){
let soma = 0
while(i < 100){
    i++
    soma = soma + i
    console.log(soma);
    alert(soma)
}
}

function exercicio4(){
let tabuada = 5
let contador = 0, total
while(contador < 10){
    contador++
    total = tabuada * contador
    alert(total)
}
}

function exercicio5(){
let tabuada = 0
let contador = 0, total
tabuada = Number(prompt("Escreva o número que deseja: "))
while(contador < 10){
    contador++
    total = tabuada * contador
    alert(total)
}
}

function exercicio6(){
    let i = 1
while(i < 20){
    console.log(i);
    i+=2
}
}

function exercicio7(){
let contador = 11
let contador2 = 0
while(contador2 < 10){
    contador2++
    alert(contador2)
}
while(contador > 0){
    contador--
    alert(contador)
}
}

function exercicio8(){
 fatorial
}

function exercicio9(){
    let contador = 0
    while(contador < 100){
        contador++
        
    if(contador%5 == 0 && contador%3 == 0){
            alert("fizzbuzz " + contador)
        }
    else if(contador%3 == 0){
        alert("fizz " + contador)
    }
    else if(contador%5 == 0){
        alert("buzz " + contador)
    }

    else{
        alert(contador)
    }
    }
}

function exercicio10(){
    let i = 0
    let total = 0
    while(i < 10){
        i++
        total = total + (1/i)
        alert(total)
    }

}

function exercicio11(){
    let contador = 0
    let par = 0
    let impar = 0 
    let valor = 0
    valor = Number(prompt("Quanto?"))
    while(contador < valor){
        contador++
        
    if(contador%2 == 0){
        par++
        alert("tem par: " + par + " em contador: " + contador)
    }
    else{
        impar++
        alert(" tem impar: " + impar + " em contador: " + contador)
    }
}
}

// function exercicio12(){
//     menor e maior

// }