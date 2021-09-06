const imprirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de Honra!')
                break
        case 8: case 7:
            console.log('Aprovado!')
                break
        case 6: case 5: case 4:
            console.log('Recuperação!')
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break;
        default:
            console.log('Nota Inválida!')
    }
}

imprirResultado(10)
imprirResultado(8.9)
imprirResultado(6.55)
imprirResultado(2.3)
imprirResultado(-1)
imprirResultado('eita')
imprirResultado(13)