const pessoa = {
    nome: 'Mateus',
    sobrenome: 'Vitor',
    idade: 21,
    endereco: {
        rua: 'R. 4',
        quadra: 17
    }
};

const { nome, sobrenome, ...resto } = pessoa
console.log(nome, sobrenome, resto)