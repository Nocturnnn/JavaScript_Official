let num = Number(prompt('Digite seu número: '))

document.body.innerHTML += `<h1>Seu número é ${num}<br/><h1/>`
document.body.innerHTML += `Sua raiz quadrada é ${num ** 0.5}<br/>`
document.body.innerHTML += `É inteiro? ${Number.isInteger(num)}<br/>`
document.body.innerHTML += `É NaN? ${Number.isNaN(num)}<br/>`
document.body.innerHTML += `Arredondado para baixo ${Math.floor(num)}<br/>`
document.body.innerHTML += `Arredondado para cima ${Math.ceil(num)}<br/>`
document.body.innerHTML += `Com duas casas decimais ${num.toFixed(2)}<br/>`