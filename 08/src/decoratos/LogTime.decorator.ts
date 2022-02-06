export default function (parametros : string){
    return (target:any, key:string, descritor: PropertyDescriptor) => {
        const originalMethod = descritor.value;
        
        descritor.value = async function(...args: any){
            const inicio = new Date().getTime()

            console.log(`Inicio de execucao do metodos ${key} ${inicio}`)

            await originalMethod.apply(this, args)

            const fim = new Date().getTime();
            console.log(`Fim de execucao do metodos ${key} ${fim}`)
            console.log(`Tempo gasto no metodo ${key} ${fim - inicio}`)

        }

        return descritor;
    }

} 


