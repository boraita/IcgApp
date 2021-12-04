import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('/v1/login')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	async login(@Body() loginDTO: LoginDTO): Promise<{ access_token: string }> {
		debugger;
		const { name, password } = loginDTO;
		const valid = await this.authService.validateUser(name, password);
		if (!valid) {
			throw new UnauthorizedException();
		}
		return await this.authService.generateAccessToken(name);
	}
}
