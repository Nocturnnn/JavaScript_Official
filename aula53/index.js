// factory function (função fabrica)
function CriaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,//             this é
        fala(assunto){//         script.parent, porém é em relação ao script.
            return `seu peso é ${this.peso}, e ${assunto}`
        },//                     script.parent.peso
        peso: 90//               p1.peso
    }
}

const p1 = CriaPessoa('Mateus', 'Vitor')
console.log(p1.fala('é muito gordo'))