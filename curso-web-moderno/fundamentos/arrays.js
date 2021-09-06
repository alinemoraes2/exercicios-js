const valores = [7.7, 8.9, 6.3, 9,2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length) // retorna o tamanho da lista
valores.push({id: 3}, false, null, 'teste') //adiciona valores a lista
console.log(valores)

console.log(valores.pop())
delete valores[0] //deleta um valor por indice
console.log(valores)

console.log(typeof valores)