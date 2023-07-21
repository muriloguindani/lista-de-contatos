const form = document.getElementById('form-contato')

let linhas = ''

form.addEventListener('submit', function(e){
    (e).preventDefault()
    
    adicionaLinha()
    
    atualizaContatos()

})

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nomeContato')
    const inputTelContato = document.getElementById('telefoneContato')

    let linha = '<tr>'
    linha += `<td>${inputNomeContato.value}</td>`
    linha += `<td>${inputTelContato.value}</td>`
    linha += '<tr>'

    linhas += linha;

    inputNomeContato.value = ''
    inputTelContato.value = ''

}

function atualizaContatos(){
    const attTabela = document.querySelector('tbody')
    attTabela.innerHTML = linhas
}