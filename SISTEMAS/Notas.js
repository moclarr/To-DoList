
dadosAlunos = []

let dados = localStorage.getItem("Informações")

if (dados) {
    dadosAlunos = JSON.parse(dados)
        atualizarTela()
}

function adicionarDados() {
    let nome = document.getElementById("nome-aluno").value
    let nota = document.getElementById("nota-aluno").value
    let status;

    if (nome == ''|| nota == '') {
        alert(`Nome e nota não podem estar vazios!`)
        return; 
    }

    if (nota < 0 || nota > 10) {
        alert('Nota com valor inválido!');
        return;
    }

    if (nota < 6) {
        status = "Reprovado!"
    } else if (nota >= 6) {
        status = "Aprovado!"
    }

    dadosAlunos.push({ Nome: nome, Nota: nota, Status: status })

    localStorage.setItem("Informações", JSON.stringify(dadosAlunos))

    document.getElementById("nome-aluno").value = ''

    document.getElementById("nota-aluno").value = ''
    atualizarTela()
}

function atualizarTela() {
    let ul = document.querySelector("ul")
    ul.innerHTML = ""

    dadosAlunos.forEach((aluno, index) => {
        let li = document.createElement("li")
        li.innerHTML = (`${aluno.Nome} - ${aluno.Nota} - ${aluno.Status} `)

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        removerResultado(checkbox, li, dadosAlunos, index)

        li.appendChild(checkbox)

        ul.appendChild(li)
    })

}

function removerResultado(checkbox, li, dadosAlunos, index){
    checkbox.addEventListener('change', () => {
        dadosAlunos.splice(index, 1)

        localStorage.setItem("Informações", JSON.stringify(dadosAlunos))

        li.remove()
    })
}