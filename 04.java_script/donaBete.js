let totalBruto, premiacoes, presentes, comissoes, lucro

totalBruto = Number(prompt("Total bruto: "))
premiacoes = Number(prompt("Premiações: "))
presentes = Number(prompt("Presentes: "))
comissoes = Number(prompt("Comissões: "))

lucro = totalBruto -  premiacoes - presentes - comissoes
let mensagem = ''
if(lucro >= meta){
    mensagem =  'Não batemos a meta, mas tivemo lucro de R$' +  lucro.toFixed(2)
}else{
    let prejuizo = lucro * -1
    mensagem = 'Não batemos a meta e ainda tivemos prejuízo de R$' + prejuizo.toFixed(2).replace('.',',')
}
