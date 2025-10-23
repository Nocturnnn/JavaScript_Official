function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y tem que ser números.')
    }
    return x + y
}

try {
    console.log(soma(1, '1'))
}catch(er){
    console.log(er)
}