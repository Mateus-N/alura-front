const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.querySelector('#menor-valor')
elementoMenorValor.innerText = menorValor
const elementoMaiorValor = document.querySelector('#maior-valor')
elementoMaiorValor.innerText = maiorValor

const dica = document.querySelector('.dica')
const elementoTentados = document.querySelector('.tentados-lista')
const tentados = []

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const tentativa = document.querySelector('#tentativa')
tentativa.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const chute = evento.target.elements['palpite']
    tentados.push(chute.value)
    if (chute.value == numeroSecreto) {
        dica.innerHTML = 'Acertou'
    } else if (chute.value < numeroSecreto) {
        dica.innerHTML = 'O número secreto é maior <i class="fa-solid fa-up-long"></i>'
    } else if (chute.value > numeroSecreto) {
        dica.innerHTML = 'O número secreto é menor <i class="fa-solid fa-down-long"></i>'
    }

    chute.value = ''
    elementoTentados.innerHTML = ''
    tentados.forEach(n => {
        elementoTentados.innerHTML += `${n}  `
    })
})