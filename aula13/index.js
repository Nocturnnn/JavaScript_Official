const nome = prompt('Digite seu nome completo: ')
document.body.innerHTML += `o seu nome é: ${nome} <br/>`
document.body.innerHTML += `o seu nome tem ${nome.length} letras. <br/>`
document.body.innerHTML += `a segunda letra do seu nome é ${nome[1]}. <br/>`
document.body.innerHTML += `qual o primeiro indice da letra ´a´ do seu nome? ${nome.indexOf('a')} <br/>`
document.body.innerHTML += `qual o ultimo indice da letra ´a´ do seu nome? ${nome.lastIndexOf('a')} <br/>`
document.body.innerHTML += `qual as ultimas 3 letras nome? ${nome.slice(-3)} <br/>`
