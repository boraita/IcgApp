import { Users } from "@db/models/users/users.entity";
import { MailService } from "@modules/mail/mail.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReportStatus } from "@shared/enums/reports-status.enum";
import { Role } from "@shared/enums/roles.enum";
import { FindManyOptions, Repository } from "typeorm";
import { UsersService } from "../users/users.service";
import { CreateReportInput } from "./create-report.dto";
import { ReportArgs } from "./report-args";
import { Reports } from "./reports.entity";
import { UpdateReportInput } from "./update-report";

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly reportsRepository: Repository<Reports>,
    private readonly mailService: MailService,
    private readonly userService: UsersService
  ) {}

  public async findAll(
    reportArgs: ReportArgs,
    user: Users
  ): Promise<Reports[]> {
    const { limit, offset } = reportArgs;
    let parameters = {
      skip: offset,
      take: limit,
      relations: ["createdBy", "backupPeople"],
      order: { date: "DESC" },
    } as FindManyOptions<Reports>;
    switch (user.roles) {
      case Role.Collaborator:
        parameters = {
          ...parameters,
          ...{
            where: [
              { createdBy: user, status: ReportStatus.done },
              { type: user.collaboratorArea, status: ReportStatus.done },
              { createdBy: user, status: ReportStatus.working },
              { type: user.collaboratorArea, status: ReportStatus.working },
            ],
          },
        };
        break;
      case Role.User:
        parameters = {
          ...parameters,
          ...{
            where: [
              { createdBy: user, status: ReportStatus.done },
              { createdBy: user, status: ReportStatus.working },
            ],
          },
        };
        break;
    }
    return this.reportsRepository.find(parameters);
  }

  public async findOne(id: string, user: Users): Promise<Reports> {
    const report = await this.reportsRepository.findOne(id, {
      relations: ["createdBy", "backupPeople"],
    });

    if (!report) {
      throw new NotFoundException(`Report #${id} not found`);
    } else if (
      report.createdBy.id === user.id ||
      user.roles === Role.Admin ||
      (user.roles === Role.Collaborator &&
        user.collaboratorArea === report.type &&
        report.status !== ReportStatus.deleted)
    ) {
      return report;
    } else {
      throw new Error("You are not allowed to update this report");
    }
  }

  public async create(
    createReportInput: CreateReportInput,
    user: Users
  ): Promise<Reports> {
    createReportInput = {
      ...createReportInput,
      createdBy: user,
      status: ReportStatus.done,
    };
    return this.reportsRepository
      .save(createReportInput)
      .then(async (report) => {
        const usersAwareNewReport =
          await this.userService.findAllToAwareNewReport(report);
        this.sendEmil(report, usersAwareNewReport);
        return report;
      });
  }

  public async update(
    id: string,
    updateReportInput: UpdateReportInput,
    user: Users
  ): Promise<Reports> {
    const report = await this.reportsRepository.preload({
      id,
      ...updateReportInput,
    });
    if (!report) {
      throw new NotFoundException(`Report #${id} not found`);
    }
    if (user !== report.createdBy) {
      throw new Error("You are not allowed to update this report");
    }

    return this.reportsRepository.save(updateReportInput);
  }

  public async sendEmil(reports: Reports, users: Users[]): Promise<unknown> {
    return this.mailService
      .sendReportCreatedMail(users, reports)
      .catch((err) => console.log(err));
  }
}
