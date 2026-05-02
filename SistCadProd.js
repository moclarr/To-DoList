let estoques = [];
let opcao;

function cadastro(produto, preco, estoque) {
    quantidadeProduto = {
        Produto: produto,
        Valor: preco,
        Quantidade: estoque
    }
    estoques.push(quantidadeProduto);
    return estoques;
}

function listarProdutos() {
    for (let i = 0; i < estoques.length; i++) {
        console.log(` ${i + 1}. ${estoques[i].Produto}`);
    }
}

function procurarProdutos(buscar) {
    for (let i = 0; i < estoques.length; i++) {

        if (estoques[i].Produto === buscar) {
            console.log("Produto enocntrado!\n");
            console.log(` ${i + 1}. Produto: ${estoques[i].Produto}\n Valor: R$ ${estoques[i].Valor}\n Quantidade: ${estoques[i].Quantidade}`);

        }
    }
}

function removerProduto(remover){
    for (let i = 0; i < estoques.length; i++) {
        if ( remover == estoques[i].Produto) {
             estoques.splice(i, 1);
             console.log(`Produto removido!`)
            }
        }
}

while (opcao !== 0) {
    console.log(`
        ||---------------||
            1 - Cadastro produtos
            2 - Listar produtos
            3 - Buscar produto
            4 - Remover produto
            0 - Sair
        ||---------------||
    `);
    opcao = Number(prompt("Digite um número: "))

    switch (opcao) {
        case 1:
            let produto = prompt(("Nome do produto para cadastrar: "));
            let preco = Number(prompt("Valor do produto: "));
            let estoque = Number(prompt("Quantidade do produto: "));

            console.log("Produto adicionado!", cadastro(produto, preco, estoque));
            break;

        case 2:
            console.log("Lista de Produtos")
            listarProdutos();
            break;

        case 3:
            let buscar = prompt("Qual o nome do produto? ");
            procurarProdutos(buscar);

            break;

        case 4:
            let remover = prompt("Qual produto quer remover? ")
            removerProduto(remover);

            break;

        case 0:
            console.log("Saindo do Sistema!...")

            break;

        default:
            console.log("Opção Inválida! Digite outro número: ")
            break;
    }



}