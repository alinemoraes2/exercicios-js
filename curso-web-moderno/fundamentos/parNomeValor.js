// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec (){
    const saudacao = 'Falaa' //contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares/nomes e valores

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
    lougradoura: 'Rua francisco alves',
    numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)