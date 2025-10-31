(function () {
  let num = document.querySelector("#numero");
  const buttons = document.querySelectorAll(".grid button");
  const clearButton = document.querySelector('button[data-action="clear"]');
  const backspace = document.querySelector('button[data-action="backspace"]');
  const plusminus = document.querySelector('button[data-action="plusminus"]');

  function Foco() {
    // detector de conta invalida
    /* colocar no enter
    for (let i in num.value) {
      console.log(num.value[i], num.value.length - 1);
      if (i !== num.value.length) {
        if (
          (num.value[i] === "/" && typeof num.value[i] !== "number") ||
          (num.value[i] === "+" && typeof num.value[i] !== "number") ||
          (num.value[i] === "-" && typeof num.value[i] !== "number") ||
          (num.value[i] === "*" && typeof num.value[i] !== "number")
        ) {
          alert("Digite uma conta válida");
          break;
        }
      }
    }*/
    num.focus();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => Foco());
  });

  function AdicionaContas(valor) {
    num.value += valor;
  }

  buttons.forEach((button) => {
    if (
      !isNaN(button.innerHTML) ||
      button.innerHTML === "+" ||
      button.innerHTML === "-" ||
      button.innerHTML === "." ||
      button.innerHTML === "%"
    ) {
      button.addEventListener("click", () => AdicionaContas(button.innerHTML));
    }

    if (button.innerHTML === "×") {
      button.addEventListener("click", () => AdicionaContas("*"));
    }

    if (button.innerHTML === "÷") {
      button.addEventListener("click", () => AdicionaContas("/"));
    }
  });

  function Clear() {
    num.value = "";
  }
  clearButton.addEventListener("click", () => Clear());

  function Backspace() {
    num.value = num.value.slice(0, -1);
  }
  backspace.addEventListener("click", () => Backspace());

  function Plusminus() {
    for (let i in num.value) {
      if (num.value[i] !== ".") {
        if (isNaN(num.value[i]) && i !== 0 && num.value[i] !== "-") {
          alert("Todos os digitos devem ser números válidos");
          return;
        }
      }
    }
    num.value = Number(num.value) * -1;
  }
  plusminus.addEventListener("click", () => Plusminus());
})();
