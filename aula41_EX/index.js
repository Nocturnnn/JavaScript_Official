// escreva um função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem(number)
// retorne true se a imagem estiver no modo paisagem

const ePaisagem = (largura, altura) => {
    return largura > altura ? true : false;
}

console.log(ePaisagem(30, 20))

// --> solução mais limpa do prof
const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(30, 20))