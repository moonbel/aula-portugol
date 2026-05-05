let salarioVendedor, valorVendidoPorEle, salario 
salarioVendedor = Number(prompt("Qual o sálario do vendedor: "))
valorVendidoPorEle = Number(prompt("Qual o valor de vendas dele: "))
salario = salarioVendedor + (salarioVendedor * 0.15)


console.log("Esse é o valor com o bonûs das vendas: " + salario)