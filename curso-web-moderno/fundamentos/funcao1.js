// Função sem retorno

function ImprimirSoma (a, b){
    console.log(a + b)
}

ImprimirSoma(2, 5)


// Função com retorno

function soma (a, b = 1){
    return a+b;
}

console.log(soma(2,5))
console.log(soma(2))