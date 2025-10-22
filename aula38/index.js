function rand(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let random = rand(1, 50)
let num = 0

while (10 !== random){ // condição executa primeiro
    random = rand(1, 50)
    num++
    console.log(random, num)
}

console.log('####')

let num2 = 0

do {
    random = rand(1, 50)
    num2++
    console.log(random, num)
} while(10 !== random) // a condição executa por ultimo