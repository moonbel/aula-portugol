function rodarwhileDo(){
    
    let idade = 0, tentativas = 3
    do{
        idade = Number(prompt("Digite sua idade"))
        tentativas--
    }while(idade < 18 && tentativas>0)
}
function rodarwhile(){
    
    let i = 0
    while(i < 50){
        i++
        console.log(i)
    }
}
function rodarfor(){
    
    let i = 0
    for(i = 0; i<50; i++){

        console.log(i)
    }
}