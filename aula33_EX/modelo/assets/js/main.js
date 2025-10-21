const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //0
    {tag: 'div', texto: 'Frase 2'}, //1
    {tag: 'footer', texto: 'Frase 3'}, //2
    {tag: 'section', texto: 'Frase 4'} //3
]

function CriarElementosComJS (){
    const Container = document.querySelector('.container')
    const div = document.createElement('div')

    Container.appendChild(div)

    for (let i = 0; i < elementos.length; i++){
        const elemento = document.createElement(elementos[i].tag)
        div.append(elemento)
        elemento.textContent = elementos[i].texto
    }
}

CriarElementosComJS()