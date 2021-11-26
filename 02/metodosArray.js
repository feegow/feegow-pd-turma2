let arr = [3,4,7,2,10]

const listObj = arr.map( (item) => {
                            return { id: item }
                        })

console.log(listObj)

const resultado = listObj.filter((item,index) => {
                        return [4,10].indexOf(item.id) > -1
                    })

console.log(resultado)

const soma = arr.reduce((resultadoAnterior, itemAtual) =>{
    return resultadoAnterior + itemAtual;
},0)

console.log(soma)

const ordenado = arr.sort((prev, current) => {
    if(prev > current) return 1;
    if(prev < current) return -1;
    return 0;
})

console.log(ordenado)