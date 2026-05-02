let tarefas = [];

let dados = localStorage.getItem("Tarefas")
if (dados) {
    tarefas = JSON.parse(dados)

    tarefas.forEach(tarefa => {
        renderizarTarefa(tarefa)
    });

}

function adicionarTarefa() {
    let input = document.querySelector("input").value;

    if(input == ''){
        alert('Adicione algo')
        return; }
    tarefas.push(input)
    localStorage.setItem("Tarefas", JSON.stringify(tarefas))
    renderizarTarefa(input)
}

function renderizarTarefa(input) {
    let li = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    li.textContent = input
    li.appendChild(checkbox)

    document.querySelector("ul").appendChild(li)
    deletarTarefa(checkbox, li, tarefas)

    document.querySelector("input").value = ''

}

function deletarTarefa(checkbox, li, tarefas) {
    checkbox.addEventListener('change', () => {
        let texto = li.textContent
        let index = tarefas.indexOf(texto)

        tarefas.splice(index, 1)
        localStorage.setItem("Tarefas", JSON.stringify(tarefas))

        li.remove()
    })
}































