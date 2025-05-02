import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAprobacioneDto {

    @IsInt()
    id: number;
    
    @IsInt()
    horaExtraId: number;
//ejemplo
    @IsEnum(['PENDIENTE', 'APROBADO', 'RECHAZADO'])
    estado: string;
  
    @IsString()
    @IsOptional()
    comentario?: string;
  
    @IsNotEmpty()
    fechaAprobacion: Date;
  
    @IsNotEmpty()
    fechaCreacion: Date;

}