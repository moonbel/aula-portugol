let custosMensais, doasoesDiarias, totalDeFalta

custosMensais = Number(prompt("Total de mensalidades: "))
doasoesDiarias = Number(prompt("Doações diarias: "))

totalDeFalta = custosMensais - doasoesDiarias

alert("Total de quanto falta para completar: " + totalDeFalta)