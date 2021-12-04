import { UsersService } from '@db/models/users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Users } from '../../db/models/users/users.entity';
import { JWTPayload } from './jwt-payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private usersService: UsersService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: process.env.JWT_SECRET,
		});
	}

	async validate(payload: JWTPayload): Promise<Users> {
		const user = await this.usersService.findOneById(payload.id);
		if (!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}
