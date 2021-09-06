function tratarErroELancar(erro){
    //throw new Error ('Ocorreu um erro, tente mais tare!!!')
    //throw 10
    //throw true
    //throw 'menssagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nme: 'Roberto'}
imprimirNomeGritado(obj)