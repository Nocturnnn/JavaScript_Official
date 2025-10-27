// declaração de função (function hoisting) --> pode ser declarada em qualquer lugar
OlaMundo()
function OlaMundo(){
    console.log('Olá, mundo!')
}

// First-Class objects (Objetos de primeira classe)
// a função pode ser tratada como um dado
const SouUmDado = function (){
    console.log('Sou um dado.')
}

function executaFunc (func){ func()}

executaFunc(SouUmDado)

// Arrow function
const arrawFunction = () => {
    console.log('Sou uma arrow function.')
}
arrawFunction()

// Dentro de um objeto
const obj = {
    falar (){
        console.log('Sou uma função dentro de um objeto.')
    },
    sla: true
}
obj.falar()