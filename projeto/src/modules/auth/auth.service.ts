import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){

    }

    async login(user: string, password: string) : Promise<any>{

        if(user== "sa" && password == "123"){
            const payload = { user: user, codigo : 1};
            const token = this.jwtService.sign(payload);
            return {token};
        }

        throw Error("Usuario ou senha invalido");
    }
}
