function Anotar() {
  const adicionarAnotacao = document.querySelector('#anotacao_input');
  const buttonAnotacao = document.querySelector('#anotacao_button');
  const ul = document.querySelector('#anotacoes');

  // 🔹 Carrega as anotações salvas ao abrir a página
  const anotacoesSalvas = JSON.parse(localStorage.getItem('anotacoes')) || [];
  anotacoesSalvas.forEach(texto => criarAnotacao(texto));

  function LimpaTarefa(input) {
    input.value = ''
    input.focus()
  }

  adicionarAnotacao.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const anotacaoText = adicionarAnotacao.value.trim();
      if (!anotacaoText) return;

      criarAnotacao(anotacaoText);

      // 🔹 Salva no localStorage
      anotacoesSalvas.push(anotacaoText);
      localStorage.setItem('anotacoes', JSON.stringify(anotacoesSalvas));

      LimpaTarefa(adicionarAnotacao) // limpa o input
    }
  });

  buttonAnotacao.addEventListener('click', function (e) {
    const anotacaoText = adicionarAnotacao.value.trim();
    if (!anotacaoText) return;

    criarAnotacao(anotacaoText);

    // 🔹 Salva no localStorage
    anotacoesSalvas.push(anotacaoText);
    localStorage.setItem('anotacoes', JSON.stringify(anotacoesSalvas));

    LimpaTarefa(adicionarAnotacao) // limpa o input
  });

  function criarAnotacao(texto) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const button = document.createElement('button');
    button.textContent = 'Apagar';
    button.id = 'apagar';

    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(button);
    ul.appendChild(li);

    // 🔹 Quando clicar em "Apagar"
    button.addEventListener('click', function () {
      li.remove();

      // 🔹 Remove também do localStorage
      const index = anotacoesSalvas.indexOf(texto);
      if (index !== -1) {
        anotacoesSalvas.splice(index, 1);
        localStorage.setItem('anotacoes', JSON.stringify(anotacoesSalvas));
      }
    });
  }
}

Anotar();
