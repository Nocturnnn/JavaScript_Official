// função com a palavra function sustenta todos argumentos
// enviados em através de arguments

function funcao(){
    console.log(arguments[0])
}

funcao('valor', 1, 2, 3, 4, 5)

//                  valor padrão
function funcao2(a, b = 2){ // --> b = b || 2
    console.log(a + b)
}

funcao2(2)

//                                     através do operador de resto, todo resto dos números no argumento vão para um array
function funcao3(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros)
}

funcao3('+', 0, 20, 30, 40, 50)