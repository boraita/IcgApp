import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../db/models/users/users.service';
import { JWTPayload } from './jwt-payload';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async validateUser(username: string, pass: string): Promise<boolean> {
		const user = await this.usersService.getUserByName(username);
		return await user?.validatePassword(pass);
	}

	async generateAccessToken(
		username: string
	): Promise<{ authorization: string }> {
		const user = await this.usersService.getUserByName(username);
		const payload: JWTPayload = { id: user.id, roles: user.roles };
		return {
			authorization: this.jwtService.sign(payload),
		};
	}
}
