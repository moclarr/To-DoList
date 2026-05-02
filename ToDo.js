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

//Pegar as informações;
//criar meu elemento li
//adicionar ele a minha lista




























// let opcao;
// let nome;
// let preco;
// let quantidade;
// let carrinho = []

// function AddProduto() {
//     nome = prompt("Nome do produto: ");
//     preco = Number(prompt("Preço do produto: "));
//     quantidade = Number(prompt("Quantidade: "));

//     carrinho.push({
//         nome: nome,
//         preco: preco,
//         quantidade: quantidade
//     });
// }

// function ListarCarrinho() {
//     console.log("Carrinho: ")

//     for (let produto of carrinho) {
//         console.log(`
// Produto: ${produto.nome}
// R$: ${produto.preco}
// Qtd: ${produto.quantidade}
//         `);

//     }
// }

// AddProduto();
// ListarCarrinho();