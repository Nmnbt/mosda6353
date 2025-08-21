import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(credential: AuthDto): Promise<{
        accessToken: string;
    }>;
}
