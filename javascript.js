//document.addEventListener("DOMContentLoaded", function () {
const inputTarefa = document.getElementById("inputnovatarefa");
const btnAdicionar = document.getElementById("addtarefa");
const listaTarefas = document.getElementsByClassName("lista-tarefas")[0];

console.log(inputTarefa, btnAdicionar, listaTarefas);
btnAdicionar.addEventListener("click", function () {
    const tarefaTexto = inputTarefa.value;
    if (tarefaTexto.trim() !== "") {
        const tarefaItem = document.createElement("li");
        tarefaItem.className = "tarefa";

        function concluirTarefa() {
            listaTarefas.push({
                tarefaTexto: inputTarefa.value,
                concluida: false,
            });
        }

        const spanTexto = document.createElement("span");
        spanTexto.className = "texto-tarefa";
        spanTexto.innerText = tarefaTexto;

        const divBotoes = document.createElement("div");

        const btnEditar = document.createElement("button");
        btnEditar.className = "btnacao";
        btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';

        const btnApagar = document.createElement("button");
        btnApagar.className = "btnacao";
        btnApagar.innerHTML = '<i class="fa fa-trash"></i>';

        btnApagar.addEventListener("click", function () {
            listaTarefas.removeChild(tarefaItem);
        });

        divBotoes.appendChild(btnEditar);
        divBotoes.appendChild(btnApagar);

        tarefaItem.appendChild(spanTexto);
        tarefaItem.appendChild(divBotoes);
        listaTarefas.appendChild(tarefaItem);

        inputTarefa.value = "";
    }
});

inputTarefa.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btnAdicionar.click();
    }
});

//});
