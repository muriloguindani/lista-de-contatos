const form = document.getElementById('form-atividade');
const aprovadoImg = '<img src="./images/aprovado.png" alt="Emoji festejando" />'
const reprovadoImg = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'

const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
    calculaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade)
    notas.push(parseFloat(inputNotaAtividade))

    let linha = '<tr>'
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? aprovadoImg : reprovadoImg}</td>`
    linha += '<tr>'

    linhas += linha

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector ('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMedia(){
    
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? "Aprovado" : "Reprovado"

    
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
    }
    
    return somaNotas / notas.length
}

