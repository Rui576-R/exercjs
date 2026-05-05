function media() {
    let nome = window.prompt('Qual é o nome do aluno(a)?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))
    media = (n1 + n2)/2

    let msg // cria uma variavel e deixa ela vazia
    if (media >= 6) {
        msg = 'Meus parabens!'
    } else {
        msg = 'Estude um pouco mais!'
    }
    // o if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comando ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('situacao')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
    res.innerHTML += `A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>` // Note que eu usei até um pouco de CSS pra fazer a mensagem ficar vermelha;
}