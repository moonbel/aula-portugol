let chance, n_celular
n_celular = Number(prompt("Quantas vezes o celular foi utilizado no processo profissionalizante?"))
chance = (0.1/(1 + 500 * n_celular)) * 100
console.log("A chance do aluno ser aprovado é equivalente a: " + chance.toFixed(4) + "%")