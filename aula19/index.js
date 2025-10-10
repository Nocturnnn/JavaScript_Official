const pessoa = {  //objeto
    nome: 'Mateus',
    sobrenome: 'Vitor',
    idade: '21'
}

console.log(pessoa.nome)
console.log(pessoa.sobrenome)

const criaPessoa  = (nome, sobrenome, idade) => {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Célio', 'Junior', 19)
console.log(pessoa1)
console.log(pessoa1.nome)

const som = {
    fala(){
        console.log('Olá, mundo!!')
    }
}
som.fala()