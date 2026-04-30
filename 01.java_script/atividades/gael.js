let caminhoes, lucroPorCaminhao, lucroTotal

lucroPorCaminhao = (90*50) - 450 
caminhoes = Number(prompt("Quantos caminhões: "))

lucroTotal = lucroPorCaminhao*caminhoes
console.log("Lucro de temporada: " + lucroTotal)