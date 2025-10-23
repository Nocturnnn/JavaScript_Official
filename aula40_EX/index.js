// escreva um função que recebe 2 números e retorne o maior deles

function maior(num1, num2){
    if (num1 > num2){
        return num1
    }else if (num1 < num2){
        return num2
    }else{
        return `${num1} e ${num2} são iguais`
    }
}

console.log(maior(1,1))