function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \n O que vamos fazer? \n [1] Somar [2] Subtrair [3] Multiplicar \n [4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = '<h2>Calculando...</h2>'
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break; // O break é obrigatório em cada case. Se não for colocado, acontecera a execução de varios compandos indesejados de outros cases
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break;
        case 3:
            saida.innerHTML += `<p>${n1} * ${n2} =  <strong>${n1*n2}</strong></p>`
            break;
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong</p>` // O método toLocalleString() é muito útil para  mostrar números de forma mais compativel com o que usamos aqui no Brasil.
            break;
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
        saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Voce digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
            break;

    }
}