import { Reports } from '@db/models/reports/reports.entity';
import { Users } from '@db/models/users/users.entity';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Role } from '@shared/enums/roles.enum';

@Injectable()
export class MailService {
	constructor(private mailerService: MailerService) {}

	public async sendReportCreatedMail(usersList: Users[], report: Reports) {
		const to = [];
		const bcc = [];
		usersList.forEach((user: Users) => {
			user.roles === Role.Admin
				? bcc.push(user.username)
				: to.push(user.username);
		});
		await this.mailerService
			.sendMail({
				to,
				bcc,
				subject: 'Report #' + report.id + ' created',
				template: 'report-created',
				context: {
					report,
				},
			})
			.catch((err) => console.log('MailerService: ' + err));
	}
}
