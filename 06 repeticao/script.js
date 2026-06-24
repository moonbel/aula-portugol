function exercicio1() {
let soma = 0;

for (let i = 1; i <= 10; i++) {soma += i;
}
console.log(soma);
}

function exercicio2() {
for (let i = 1; i <= 10; i++) {
console.log(`5 x ${i} = ${5 * i}`);
}
}

function exercicio3() {
for (let i = 1; i <= 10; i++) {
console.log(i * i);
}
}
function exercicio4() {
let palavra = "JavaScript";
for (let i = 0; i < palavra.length; i++) {
console.log(palavra[i]);
}
}

function exercicio5() {
for (let i = 1; i <= 30; i++) {
if (i % 3 === 0) {console.log(i)}
}
}

function exercicio6() {
let resultado = "";
for (let i = 1; i <= 10; i++) {
resultado += "*";
}
console.log(resultado);
}

function exercicio7() {
let soma = 0;
for (let i = 2; i <= 20; i += 2) {
soma += i;
}
console.log(soma);
}

function exercicio8() {
for (let i = 0; i <= 50; i += 5) {
console.log(i);
}
}

function exercicio9() {
for (let i = 1; i <= 8; i++) {
console.log("Olá!");
}
}

function exercicio10() {
let soma = 0;
for (let i = 1; i <= 15; i += 2) {
soma += i;
}
console.log(soma);
}

function exercicio11() {
let soma = 0;
for (let i = 1; i <= 15; i += 2) {
soma += i;
}
console.log(soma);
}

function exercicio12() {
let texto = "";
for (let i = 1; i <= 5; i++) {
texto += i;
console.log(texto);
}
}

function exercicio13() {
let fatorial = 1;
for (let i = 1; i <= 5; i++) {
fatorial *= i;
}
console.log(fatorial);
}

function exercicio14() {
let palavra = prompt("Digite uma palavra:");
let contador = 0;

for (let i = 0; i < palavra.length; i++) {
if (palavra[i].toLowerCase() === "o") {contador++;}
}
console.log("Quantidade de letras 'o':", contador);
}