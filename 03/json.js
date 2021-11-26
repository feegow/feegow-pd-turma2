const obj1 = { Nome: "Wesdras", Idade: 33 }

const obj2 = {...obj1, Nome: "Marcus" }

console.log(obj1)
console.log(obj2)

function Soma(valor1, ...valores){
    return valores.reduce((prev, curr) => prev + curr)
}

console.log(Soma(1,2,3,4,5, 2))



