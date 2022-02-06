import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [AuthModule, PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
