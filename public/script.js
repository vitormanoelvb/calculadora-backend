// Insere valor na tela
function inserir(valor) {
  document.getElementById("tela").value += valor;
}

// Limpa a tela
function limpar() {
  document.getElementById("tela").value = "";
}

// Faz o cálculo e envia para o backend
function calcular() {
  const tela = document.getElementById("tela");
  try {
    const expressao = tela.value;
    const resultado = eval(expressao);
    tela.value = resultado;

    // Salva no banco
    fetch('/api/calculadora/salvar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expressao, resultado })
    }).then(() => exibirHistorico());
  } catch (e) {
    tela.value = "Erro";
  }
}

// Exibe o histórico vindo do banco
function exibirHistorico() {
  const historicoDiv = document.getElementById("historico");
  if (!historicoDiv) return;

  fetch('/api/calculadora/historico')
    .then(res => res.json())
    .then(historico => {
      historicoDiv.innerHTML = "<strong>Histórico:</strong><br>" +
        historico.map(item => `• ${item.expressao} = ${item.resultado}`).join("<br>");
    });
}

function abrirConfiguracoes() {
  window.location.href = "config.html";
}

// Aplica configurações e animações
window.onload = () => {
  // Tema e responsivo
  const tema = localStorage.getItem("tema");
  const responsivo = localStorage.getItem("responsivo");

  if (tema === "claro") {
    document.body.classList.add("tema-claro");
  }

  if (responsivo === "ativado") {
    document.body.classList.add("modo-responsivo");
  }

  // Botão animado
  document.querySelectorAll("button").forEach(botao => {
    botao.addEventListener("click", () => {
      botao.classList.add("botao-animado");
      setTimeout(() => botao.classList.remove("botao-animado"), 200);
    });
  });

  // Carrega histórico do banco
  exibirHistorico();
};
