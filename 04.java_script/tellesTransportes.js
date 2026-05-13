let frete, distancia, volume, peso

peso = Number(prompt("Qual é o peso: "))
distancia = Number(prompt("Qual é a distância: "))
volume = Number(prompt("Qual é o volume: "))

frete = 15 + (2*peso)+(0.05*distancia)+(10*volume)
console.log("O valor do frete vai ser: " + frete)
