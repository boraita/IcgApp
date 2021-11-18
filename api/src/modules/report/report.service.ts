import { Injectable } from '@nestjs/common';
import { Report } from '../../shared/models/report';

@Injectable()
export class ReportService {
	getReports(): Report[] {
		return [
			{ area: 2, text: 'Elena lo ha hecho realmente mal', userId: 'Rosa' },
			{ area: 2, text: 'Elena lo ha hecho realmente mal', userId: 'Rosa' },
			{ area: 2, text: 'Elena lo ha hecho realmente mal', userId: 'Rosa' },
			{ area: 2, text: 'Elena lo ha hecho realmente mal', userId: 'Rosa' },
		];
	}
}
