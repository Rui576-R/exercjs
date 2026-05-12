function estação() {
    let entrada = prompt('Digite o mês por extenso ou o número do mês (1 a 12)')
    let saida = document.querySelector('section#saida')
    let estação

    // Remove espaços e transforma em maiúsculas
    let mês = entrada.trim().toLocaleUpperCase

    switch (mês) {
        // Janeiro, Fevereiro, Março
        case '1':
        case '01':
        case 'Janeiro':
        case '2':
        case '02':
        case 'Fevereiro':
        case '3':
        case '03':
        case 'Março':
        case 'Marco':
            estação = 'INVERNO'
            break;
        
        // Abril, Maio, Junho
        case '4':
        case '04':
        case 'ABRIL':
        case '5':
        case '05':
        case 'MAIO':
        case '6':
        case '06':
        case 'JUNHO':
            estação = 'PRIMAVERA'
            break;

        // Julho, Agosto, Setembro
        case '7':
        case '07':
        case 'JULHO':
        case '8':
        case '08':
        case 'AGOSTO':
        case '9':
        case '09':
        case 'SETEMBRO':
            estação = 'VERÃO'
            break;

        // Outubro, Novembro, Dezembro
        case '10':
        case 'OUTUBRO':
        case '11':
        case 'NOVEMBRO':
        case '12':
        case 'DEZEMBRO':
            estação = 'OUTONO'
            break;

            default:
                estação = 'INDEFINIDA'
                break;
        }

        saida.innerHTML = `<p>No mês <mark>${entrada}</mark>, estamos na estação<mark><strong>${estação}</strong></mark></p>`
}