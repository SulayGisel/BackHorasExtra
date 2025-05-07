import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurnoModule } from './turno/turno.module';
import { HorasExtrasModule } from './horasExtras/horas-extras.module';
import { TipoHorasExtrasModule } from './tipo-horas-extras/tipo-horas-extras.module';
import { AprobacionesModule } from './aprobaciones/aprobaciones.module';
import { UsuarioTurnoModule } from './usuario-turno/usuario-turno.module';
import { RolModule } from './rol/rol.module';
import { LoginModule } from './login/login.module';
import { PreguntasModule } from './preguntas/preguntas.module';
import { AsignacionTurnoModule } from './asignacion-turno/asignacion-turno.module';
import { JwtAuthGuard } from './login/JwtAuthGuard';
import { JwtStrategy } from './login/JwtStrategy';
import { HelloWordModule } from './HelloWord/HelloWord.module';
import { AppController } from './AppController';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'shinkansen.proxy.rlwy.net', // MYSQLHOST
      port: 13952,                        // MYSQLPORT
      username: 'root',                  // MYSQLUSER
      password: 'JIPKxeMQUqIlHFcpJFxJjYIWNUiBgwWu',           // MYSQLPASSWORD
      database: 'railway',               // MYSQLDATABASE
      autoLoadEntities: true,
      synchronize: true,
      ssl: false, // Railway usa red pública, puedes poner false por ahora
    }),
    TurnoModule,
    HorasExtrasModule,
    TipoHorasExtrasModule,
    AprobacionesModule,
    UsuarioTurnoModule,
    RolModule,
    LoginModule,
    UserModule,
    PreguntasModule,
    AsignacionTurnoModule,
    HelloWordModule
  ],
  controllers: [AppController],
  providers: [JwtAuthGuard,JwtStrategy],
})
export class AppModule {}


// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host: 'bijwuurdjvy1uz5oy463-mysql.services.clever-cloud.com',
//   port: 3306,
//   username: 'uep3pwbt2l3sgmiv',
//   password: 's0zGJt0zI1akbBtnIXn9',
//   database: 'bijwuurdjvy1uz5oy463',
//   autoLoadEntities:true,
//   synchronize: true,
// }),