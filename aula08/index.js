const nome = 'Luiz' // String
const nome1 = "Luiz" // String
const nome2 = `Luiz` // String
const num1 = 10 // Number
const num2 = 10.1 // Number
let nomeAluno // undefined --> não aponta pra nenhum local na memória
let sobrenomeAluno = null // Nulo --> não aponta pra nenhum local na memória
const aprovado = true // Boolean = true ou false (lógico)

console.log(typeof aprovado, aprovado)

/* a diferença de dados do tipo primitivo e dados não primitivos como array
é que dados do tipo primitivo quando recebem valores com '=' copiam seus dados. Mas
dados como array acessam o mesmo local na memoria quando o recebem com '='. Logo
os dois valores são alterados em conjunto mesmo que ssejam dois array 'diferentes'
*/