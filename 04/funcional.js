const soma = (valor1, valor2) => valor1 + valor2

const subtracao = function(valor1, valor2){
    return valor1 - valor2  
} 
// console.log(soma(1,2));


function Tabuada(numeroPrincipal){
    return function(numeroMultiplicador){
        return numeroPrincipal * numeroMultiplicador;
    }
}

const tabuada2 = Tabuada(2)
const tabuada50 = Tabuada(50)


console.log(tabuada2(1))
console.log(tabuada2(2))
console.log(tabuada2(3))

console.log(tabuada50(2))