const sequencia = {
    _valor: 1, // por convenção quando se põem o '_' na frente do att entende-se que este se torna um att privado
    get valor(){
        return this._valor++
    },
    set valor(valor){
        this._valor = valor
        if(valor> this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)