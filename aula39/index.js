const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of arrayNum) {
  if (num === 2) {
    continue; // --> Pula
  }

  if (num === 7) {
    break; // --> Sair do laço
  }
  console.log(num);
}
