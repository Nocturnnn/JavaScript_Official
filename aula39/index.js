const array = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of array){
    if (num === 2){
        continue // --> Pula
    }
    console.log(num)
}