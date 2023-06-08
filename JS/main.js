const btNovaTarefa = document.querySelector(".bt_nova_tarefa");

btNovaTarefa.addEventListener("click", function (event) {
  event.preventDefault();

  var verificaCampo = verificaValorCampo();
  if (verificaCampo == true) {
    tagLI = criaNovaTarefa();

    criaBtClose();
    selecionaBtFechar();
    gambiarra();
    limparForm();
  }
});

window.onload = (event) => {
  criaBtClose();
  selecionaBtFechar();
};

function limparForm() {
  const formulario = document.querySelector(".formulario");
  formulario.reset();
}

function criaNovaTarefa() {
  let valorNovaTarefa = document.querySelector(".nova_tarefa_campo").value;
  let tarefasLista = document.querySelector(".lista_tarefas");

  let tagLI = document.createElement("li");
  tagLI.classList.add("item_tarefas");

  let tagP = document.createElement("p");
  tagP.classList.add("txt_tarefa");

  tagP.textContent = valorNovaTarefa;
  tarefasLista.appendChild(tagLI);
  tagLI.appendChild(tagP);

  return tagLI;
}

function criaBtClose() {
  var tarefasLista = document.querySelectorAll(".item_tarefas");

  for (let i = 0; i < tarefasLista.length; i++) {
    var elemento = tarefasLista[i];
    var filho = elemento.childElementCount;

    if (filho == 1) {
      let span = document.createElement("span");
      span.classList.add("bt_fechar_item");
      span.textContent = "\u00D7";
      elemento.appendChild(span);
    }
  }
}

function selecionaBtFechar() {
  var btFecharTarefa = document.querySelectorAll(".bt_fechar_item");

  for (let i = 0; i < btFecharTarefa.length; i++) {
    btFecharTarefa[i].addEventListener("click", function () {
      let tarefa = btFecharTarefa[i].parentNode;
      tarefa.classList.add("fechado");
    });
  }
}

function tarefaConcluida() {
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );
}
tarefaConcluida();

function verificaValorCampo() {
  let valorNovaTarefa = document.querySelector(".nova_tarefa_campo").value;

  if (valorNovaTarefa == "") {
    alert("Erro:Campo Invalido");
    return false;
  } else {
    return true;
  }
}

//Gambiarra criada temporariamente no desespero para finalizar o projeto :/
function gambiarra() {
  var colecaoTxt = document.querySelectorAll(".txt_tarefa");
  for (let i = 0; i < colecaoTxt.length; i++) {
    colecaoTxt[i].addEventListener("click", function () {
      var elementoPai = colecaoTxt[i].parentNode;
      elementoPai.classList.toggle("checked");
    });
  }
}

const overlay = document.querySelector(".teste");
var campoNovaTarefa = document.querySelector(".nova_tarefa_campo");
var formulario = document.querySelector(".formulario");

overlay.addEventListener("click", fimTutorial);
campoNovaTarefa.addEventListener("focus", fimTutorial);

function fimTutorial() {
  overlay.style.display = "none";
  var spanForm = formulario.getElementsByTagName("span");
  for (let i = 0; i < spanForm.length; i++) {
    const element = spanForm[i];
    element.style.display = "none";
  }
}
