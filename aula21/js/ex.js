function retornaDados(nome, sobrenome, peso, altura){
    return {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    }
}

function meuEscopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []

   // form.onsubmit = function(evento){
   //     evento.preventDefault()
   // };

   form.addEventListener('submit', function(evento){
    evento.preventDefault()

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const dados = retornaDados(nome.value, sobrenome.value, peso.value, altura.value)
    pessoas.push(dados)

    console.log(pessoas)
    resultado.innerHTML += `<p>nome: ${nome.value}, sobrenome: ${sobrenome.value}, peso: ${peso.value}, altura: ${altura.value}</p>`
   })
}

meuEscopo()