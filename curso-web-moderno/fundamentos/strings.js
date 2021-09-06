const escola = "Cod3r"

console.log(escola.charAt(4))// apresenta o valor presente no indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// valor do indice 3 da palavra escola na tabela asc
console.log(escola.indexOf(3))

console.log(escola.substring(1)) //proseguir a partir de tal indice
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat("!"))// concatenação de Strings
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))