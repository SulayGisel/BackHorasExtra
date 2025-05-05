import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from './decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    constructor(private reflector: Reflector) {
        super();
    }

    canActivate(context: ExecutionContext) {
        // Permitir solicitudes OPTIONS sin autenticación
        if (context.switchToHttp().getRequest().method === 'OPTIONS') {
            return true;
        }

        // Verificar si la ruta es pública
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        return super.canActivate(context);
    }

    handleRequest(err, user, info) {
        // Lanzar excepción personalizada si el usuario no es válido
        if (err || !user) {
            throw err || new UnauthorizedException('Invalid token or session expired');
        }
        return user;
    }
}