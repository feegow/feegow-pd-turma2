import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PacienteModule } from './modules/paciente/paciente.module';
import {PassportModule} from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt';
import { UsuarioModule } from './modules/usuario/usuario.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '60s'}
    }),
    TypeOrmModule.forRoot(),
    AuthModule, 
    PacienteModule,
    UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
