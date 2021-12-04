import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('v1/login')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post()
	async login(
		@Body() userLogin: { username; password }
	): Promise<{ authorization: string }> {
		const { username, password } = userLogin;
		const valid = await this.authService.validateUser(username, password);
		if (!valid) {
			throw new UnauthorizedException();
		}
		return await this.authService.generateAccessToken(username);
	}
}
