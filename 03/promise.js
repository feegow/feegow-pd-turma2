
const promessa = () => new Promise((resolve, reject) =>{
                                console.log("Trabalhando")
                                setTimeout(() => {
                                    resolve([1,2]);
                                    // console.log('Resolvido')
                                    //reject('promessa com erro')
                                }, 400);
                            })

function ProcessaLog(params) {
  console.log("Agora acabou mesmo a execucao", params)
}

function TratarLog(params) {
    console.log("Erro na funcao", params)
  }

const func = async function(){
    console.log("Inicio Funcao")
    
    const result = await promessa()

    console.log(result)

    console.log("Fim Funcao")
}

console.log("Antes da função")
func()
console.log("Depois da função")

