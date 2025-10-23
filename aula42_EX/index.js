/* escreva uma fução que recebe um número e retorne
numero divisivel por 3 = fizz
divisivel por 5 = buzz
divisivel por 3 e 5 = fizzbuzz
não divisivel por 3 e 5 = propio num
se não for um num = propio num
use a função com num de 0 a 100
*/

function VerificadorBuzzFizz (num){
    if (num < 0 || num > 100) return 'digite um número de 0 a 100'; // Use a função com num de 0 a 100

    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }else if (num % 3 === 0){
        return 'Fizz'
    }else if (num % 5 === 0){
        return 'Buzz'
    }else if (num % 3 !== 0 && num % 5 !== 0 || typeof num !== 'number'){
        return num
    }
}

console.log(VerificadorBuzzFizz(15))