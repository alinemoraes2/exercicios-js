// função factory é uma função que retorna um obj, ou uma/várias funções.
function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.99))
console.log(criarProduto('Celular', 899.99))
