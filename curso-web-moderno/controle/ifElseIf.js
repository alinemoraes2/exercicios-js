Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprirResultado = function (nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra!')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado!')
    } else{
        console.log('Nota Invalida!')
    }
    console.log('Fim!')
}

imprirResultado(10)
imprirResultado(8.9)
imprirResultado(6.5)
imprirResultado(2.3)
imprirResultado(-1)
imprirResultado(12)