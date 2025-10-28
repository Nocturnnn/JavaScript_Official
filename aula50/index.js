function retornaFuncao(){
    const nome = 'Mateus'
    return function(){ // Closure fica dentro do escopo (geralmente é o escopo 0 que é o da propia func)
        return nome
    }
}

const nomeF = retornaFuncao() // essa função tem acesso a 3 escopos