/*
Mateus tem 21 anos, pesa 90kg tem 1.75m de altura e seu imc é de ...
Mateus nasceu em 2004
*/

const nome = 'Mateus'
const idade = 21
const peso = 90
const altura = 1.75
let imc // peso / (altura * altura)
let anoDeNascimento

imc = 90 / (1.75 * 1.75)
anoDeNascimento = 2025 - idade
console.log(nome, 'tem', idade, 'anos pesa', peso, 'kg tem', altura,'de altura e seu imc é de', imc, 'ele nasceu em', anoDeNascimento)

console.log(`${nome} tem ${idade} anos pesa ${peso}kg tem ${altura} de altura e seu imc é de ${imc} ele nasceu em ${anoDeNascimento}`)
