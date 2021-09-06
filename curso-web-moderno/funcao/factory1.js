// factory é uma função que retorna sempre um obj
// factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())