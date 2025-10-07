//Cada variável deve receber oque está comentado através de outra variável
let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

let A = varA
let B = varB
let C = varC

varA = B
varB = C
varC = A

console.log(varA, varB, varC)