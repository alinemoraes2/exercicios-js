// Armazenando uma função em uma variável
const ImprimirSoma = function (a,b){
    console.log(a+b)
}
 ImprimirSoma(2,3)

 //Armazenando uma função arrow em uma variável
 const soma= (a, b) =>{
     return a + b
 }

 console.log(soma(2,5))

 // Retorno Implícito

const subtracao = (a,b) => a - b
console.log(subtracao(10,3))