(function () {
  let num = document.querySelector("#numero");
  const buttons = document.querySelectorAll(".grid button");
  const clearButton = document.querySelector('button[data-action="clear"]');
  const backspace = document.querySelector('button[data-action="backspace"]');

  function Foco() {
    for(let value of num.value){
        if(typeof value !== 'number'){
            alert('Digite um número válido')
        }
    }
    num.focus();
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => Foco());
  });

  function Clear() {
    num.value = "";
  }
  clearButton.addEventListener("click", () => Clear());

  function Backspace() {
    num.value = num.value.slice(0, -1);
  }
  backspace.addEventListener("click", () => Backspace());
})();
