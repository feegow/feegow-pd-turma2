import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dtos/Auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post()
    async login(@Body() userData: AuthDTO){
        try{
            return await this.authService.login(userData.user, userData.password);
        }
        catch(ex){
            throw new BadRequestException(ex.message);
        }
    }
}
