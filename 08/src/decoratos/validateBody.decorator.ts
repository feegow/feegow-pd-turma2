
import { AnySchema } from 'yup'

export default function (schema : AnySchema) {
    return (target: any, key: string, descriptor:  PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any){
            const [req, res] = args;
            let erros : [] = [];

            const retorno = await new Promise((resolve : (value: boolean) => void ) => {
                schema.validate(req.body)
                    .then(() => {
                        resolve(true);
                    })
                    .catch(err => {
                        erros = err.errors;
                        resolve(false);
                    })
            })

            if(retorno){
                originalMethod.apply(this, args);
            }
            else{
                res.status(500);
                res.send(`Objeto inválido ${JSON.stringify(erros)}`)
            }
        }

        return descriptor;
    }
}