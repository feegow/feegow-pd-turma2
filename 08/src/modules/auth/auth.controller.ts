import {Request, Response} from 'express';
import AuthDTO from '../../dto/AuthDTO';
import jwt, { Secret } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export default class AuthController{

    async Logar(req: Request, res: Response){
        const {body} = req;
        const DataAuth = body as AuthDTO
        
        if(DataAuth.User == 'wesdras' && DataAuth.Pass == '123' ){
            const token = jwt.sign({
                id: 10,
                name: "Wesdras"
            }, process.env.SECRET as Secret, {expiresIn: 3000 })

            res.status(200).json({token});
        }
        else{
            res.status(401).json({erro: 'Usuario ou senha inválido'})
        }
    }

    async ValidateToken(req: Request, res: Response){
        const {body} = req;
        
        jwt.verify(body.token, process.env.SECRET as Secret, (erro:any) => {
            if(erro){
                res.status(401).json({erro})
                return;
            }
            res.status(200).json({ok: true})
        })

    }
}