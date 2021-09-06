{ 
    { 
        { 
            { 
                var sera = 'Será???' 
                console.log(sera)
            } 
        } 
    } 
}
// Uma variável criada fora de uma função é global, ou seja, pode ser
// acessada fora do bloco.
// evitar usar variáveis de escopo global.
// variáveis só podem ser de escopo global ou local (nível de função)
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local)