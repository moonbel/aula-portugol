let combustivelUsado, distanciaPercorrida, resultado

combustivelUsado = Number(prompt("Quanto de combustível foi usado: "))
distanciaPercorrida = Number(prompt("quanto foi a distância percorrida: "))

resultado = combustivelUsado / distanciaPercorrida

console.log("A kilometragem por hora foi de: " + resultado.toFixed(1) +"km/l")