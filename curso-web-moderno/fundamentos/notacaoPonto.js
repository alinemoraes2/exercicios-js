console.log(Math.ceil(6.1))

const objet1 = {}
objet1.nome = 'Bola'
//objet1 ['nome'] = 'Bola2'
console.log(objet1.nome)

function obj (nome){
    this.nome = nome
}

const obj2 = new obj ('Cadeira')
const obj3 = new obj ('Mesa')
 console.log(obj2.nome)
 console.log(obj3.nome)