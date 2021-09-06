// pessoa aponta -> para o endereço de memória -> 123, e o endereço de memória aponta para o objeto
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)


// pessoa irá receber <- novo objeto do endereço 456, o endereço aponta para um novo objeto. 
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)