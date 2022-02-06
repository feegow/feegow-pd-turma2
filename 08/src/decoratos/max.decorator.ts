export default function (length: number){
    return (target: any, key: string ) => {
        let val = Reflect.get(target, key);

        const getter = () => val;
        const setter = (value: string) =>{
            if(value.length > length){
                throw new Error("Valor maior que o permitido");
            }

            val = value;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}