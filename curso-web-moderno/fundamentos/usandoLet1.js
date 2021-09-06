// neste exemplo pode ser usando let ou var, pois ambos estão em escopos diferentes
var numero = 1
{
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)