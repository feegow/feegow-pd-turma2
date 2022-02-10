import { Request, Response } from 'express';
import * as dotenv from "dotenv";
import jwt, { Secret } from 'jsonwebtoken';

dotenv.config();

export default function Authenticated() {

    return function(target: any, key: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = async function(...args: any){
            const [req , res] = args;

            try{
                await verifyJWT(req)
                .then((idUser: any) =>
                {
                    metodoOriginal.apply(this, args);
                });
            }
            catch(ex){
                console.log('Erro ao converter usuario JWT');
                res.status(401).send({ auth: false, message: 'Usuário não autenticado.' })
            }
        }

        return descriptor;
    }
}

function verifyJWT({headers} : Request) : Promise<any>
{
    return new Promise((resolve: Function, rejects: Function) => {
        const {authorization : token} = headers;
    
        if (!token) {
            rejects("Token não informado.");
            return;
        }

        jwt.verify(token.split(' ')[1],process.env.SECRET as Secret , function(err: any, decoded: any) : void {
            
            if (err) {
                rejects("Token inválido.");
                return;
                //res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            
            const {id} = decoded;
            resolve(id);
        });
    })
}