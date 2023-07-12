import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportsTypeInput } from './create-reports-type.dto';
import { ReportsType } from './reports-type.entity';
import { UpdateReportsTypeInput } from './update-reports-type.dto';

@Injectable()
export class ReportsTypeService {
	constructor(
		@InjectRepository(ReportsType)
		private readonly reportTypeRepository: Repository<ReportsType>
	) {}
	public async findOne(id: string): Promise<ReportsType> {
		return this.reportTypeRepository.findOne(id);
	}
	public async findAll(): Promise<ReportsType[]> {
		return this.reportTypeRepository.find();
	}
	public async create(
		reportType: CreateReportsTypeInput
	): Promise<ReportsType> {
		return this.reportTypeRepository.save(reportType);
	}
	public async update(
		id: string,
		reportType: UpdateReportsTypeInput
	): Promise<ReportsType> {
		const reportTypeUpdated = await this.reportTypeRepository.findOne(id);
		if (!reportTypeUpdated) {
			throw new NotFoundException(`ReportType #${id} not found`);
		}

		return this.reportTypeRepository.save({
			...reportTypeUpdated,
			...reportType,
		});
	}
}
