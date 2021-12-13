import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reports } from './reports.entity';
import { UpdateReportInput } from './update-report';
import { CreateReportInput } from './create-report.dto';
import { ReportArgs } from './report-args';

@Injectable()
export class ReportsService {
	constructor(
		@InjectRepository(Reports)
		private readonly reportsRepository: Repository<Reports>
	) {}

	public async findAll(reportArgs: ReportArgs): Promise<Reports[]> {
		const { limit, offset } = reportArgs;
		return this.reportsRepository.find({
			skip: offset,
			take: limit,
		});
	}

	public async findOne(id: number): Promise<Reports> {
		return await this.reportsRepository.findOne(id);
	}

	public async create(createReportInput: CreateReportInput): Promise<Reports> {
		return this.reportsRepository.save(createReportInput);
	}

	public async update(
		id: string,
		updateReportInput: UpdateReportInput
	): Promise<Reports> {
		const report = await this.reportsRepository.preload({
			id: id,
			...updateReportInput,
		});
		if (!report) {
			throw new NotFoundException(`Report #${id} not found`);
		}

		return this.reportsRepository.save(updateReportInput);
	}
}
