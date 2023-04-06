const form = document.querySelector('#novoItem')
const lista = document.querySelector('.lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']
    
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    const exite = itens.find(elemento => elemento.nome === nome.value)
    if (exite) {
        itemAtual.id = exite.id
        atualizaElemento(itemAtual)
        const posicaoDoItem = itens.findIndex(elemento => elemento.id === id)
        itens[posicaoDoItem] = itemAtual
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    localStorage.setItem('itens', JSON.stringify(itens))

    nome.value = ''
    quantidade.value = ''
})

function criaElemento(item) {
    const novoItem = document.createElement('li')
    novoItem.classList.add('item')

    const numeroItem = document.createElement('strong')
    numeroItem.dataset.id = item.id
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome
    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    const itemExistente = document.querySelector(`[data-id='${item.id}']`)
    itemExistente.innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'X'

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    const posicaoDoItem = itens.findIndex(elemento => elemento.id === id)
    itens.splice(posicaoDoItem, 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}