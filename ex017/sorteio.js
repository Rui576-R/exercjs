function gerar() {
    let min = 1
    let max = 60
    let dif = max - min
    let aleatorio = Math.random() // Essa função gera um valor Real aleatorio entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('section#resultado')
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() { // Essa é a funcionalidade do outro botão, pra limpar tudo
    let res = document.querySelector('section#resultado')
    res.innerHTML = null // Vai esvaziar a section toda
}