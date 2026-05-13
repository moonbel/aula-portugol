let clt, estagiarios, pj, total

clt = Number(prompt("Quantos clt tem na empresa: "))
estagiarios = Number(prompt("Quantos estagiários tem na empresa: "))
pj = Number(prompt("Quantos devs pj tem na empresa: "))

total = (clt + estagiarios + pj)
console.log("O total de devs da empresa é de: " + total) 