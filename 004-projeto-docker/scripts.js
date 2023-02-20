const button = document.querySelector('#send')
const resposta = document.querySelector('#resposta')

button.addEventListener('click', function(e) {
    e.preventDefault()

    const name = document.querySelector('#name')
    const value = name.value

    novaFrase = trocarA(value)
    resposta.innerHTML = novaFrase
})

function trocarA(frase){
    let novaFrase = ''
    const vogais = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < frase.length; i++){
        if (vogais.includes(frase[i].toLowerCase())){
            novaFrase += 'aie'
        } else {
            novaFrase += frase[i]
        }
    }

    return novaFrase
}