// operação ternaria
const pontuacaoUsuario = 9999

if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
}else {
    console.log('Usuário normal')
}

//operação ternaria
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario)